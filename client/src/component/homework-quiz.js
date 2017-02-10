import React, {Component}  from 'react';

export default class HomeworkQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    }
  }

  render() {
    return (
      <div>
        <div hidden="false" className="col-sm-1 homework-quiz">
        </div>

      </div>
    );
  }
}
