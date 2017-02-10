import React, {Component}  from 'react';

export default class HomeworkQuiz extends Component {

  render() {
    return (
      <div className="col-sm-1 homework-quiz">
        {this.props.quiz}
      </div>
    );
  }
}
