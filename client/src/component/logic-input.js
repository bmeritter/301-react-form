import React, {Component} from 'react';

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
      <input className="form-control"
             disabled={disabled}
             type="number"
             ref={(ref) => {
               content[difficulty] = ref;
             }}
             onBlur={content.handleChange.bind(content)}/>
    </div>
  );
};

export default class LogicInputs extends Component {
  componentDidUpdate() {
    this.easy.value = this.props.logicPuzzle.easy || '';
    this.normal.value = this.props.logicPuzzle.normal || '';
    this.hard.value = this.props.logicPuzzle.hard || '';
  }

  handleChange() {
    let definition = {
      easy: parseInt(this.easy.value) || 0,
      normal: parseInt(this.normal.value) || 0,
      hard: parseInt(this.hard.value) || 0
    };
    this.props.inputChange(definition);
  }

  render() {
    return (
      <div className="difficult-setter col-sm-offset-3">
        <form className="form-inline">
          {
            difficultLevel.map((item, index) => {
              return (
                <DifficultSetter key={index} {...item} content={this}
                                 disabled={this.props.inputState}/>
              )
            })
          }
        </form>
      </div>
    );
  }
}
