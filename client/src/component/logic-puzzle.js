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
    difficulty: 'hard'
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

  componentDidUpdate() {
    console.log(this.props.logicPuzzle);

    this.logic.checked = !this.props.logicType;
    this.easy.value = this.props.logicPuzzle.logicPuzzle.easy || '';
    this.normal.value = this.props.logicPuzzle.logicPuzzle.normal || '';
    this.hard.value = this.props.logicPuzzle.logicPuzzle.hard || '';
  }

  changeLogicState() {
    this.logic.checked = !this.logic.checked;

    this.handleUpdateLogic();
  }

  handleUpdateLogic() {

    let definition;
    if (this.logic.checked) {
      definition = {
        easy: parseInt(this.easy.value) || 0,
        normal: parseInt(this.normal.value) || 0,
        hard: parseInt(this.hard.value) || 0
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
                  <DifficultSetter key={index} {...item} content={this}
                                   disabled={!this.props.logicPuzzle }/>
                )
              })
            }

          </form>
        </div>

      </div>
    );
  }
}

