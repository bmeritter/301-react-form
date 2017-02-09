import React from 'react';
import {Component} from 'react';

export default class HomeworkQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworkQuiz: {}
    };
  }

  render() {

    return (
      <div hidden="true" className="col-sm-1 homework-quiz">
        
      </div>
    );
  }
}
