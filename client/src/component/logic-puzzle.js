import React, {Component}  from 'react';

const difficultLevel = [
  {
    text: '简单',
    difficulty: 'easy'
  }, {
    text: '一般',
    difficulty: 'normal'
  }, {
    text: '困难',
    difficulty: 'difficult'
  }
];

const DifficultSetter = ({text, difficulty, content, disabled}) => {

  return (
    <div className="form-group">
      <label>{text}</label>
      <input disabled={disabled} type="number" className="form-control" ref={(ref) => {
        content[difficulty] = ref;
      }} onBlur={content.handleUpdateLogic.bind(content)}/>
    </div>

  );
};

export default class LogicPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logicState: true
    }
  }

  componentDidMount() {
    this.props.initLogicPuzzle();
  }

  changeLogicState() {
    this.setState({
      logicState: !this.state.logicState
    });

    this.handleUpdateLogic();
  }

  handleUpdateLogic() {

    let definition;
    if (this.logic.checked) {
      definition = {
        easy: parseInt(this.easy.value) || 0,
        normal: parseInt(this.normal.value) || 0,
        hard: parseInt(this.difficult.value) || 0
      };
    }
    this.props.updateLogicPuzzle(definition);

  }

  render() {
    return (
      <div className="logic-puzzle">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">逻辑题</label>
            <div className="checkbox col-sm-1">
              <input type="checkbox" ref={(ref) => {
                this.logic = ref;
              }} onChange={this.changeLogicState.bind(this)}/>
            </div>
          </div>
        </form>

        <div className="difficult-setter col-sm-offset-3">
          <form className="form-inline">
            {
              difficultLevel.map((item, index) => {
                return (
                  <DifficultSetter key={index} {...item} content={this} disabled={this.state.logicState}/>
                )
              })
            }

          </form>
        </div>

      </div>
    );
  }
}

