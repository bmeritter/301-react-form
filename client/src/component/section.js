import React, {Component}  from 'react';

import QuizAddButton from '../container/quiz-add-button';
import HomeworkQuiz from './homework-quiz';

export default class Section extends Component {
  render() {
    let homeworkQuiz = this.props.definition.quizzes || [];

    return (
      <div className="section col-sm-offset-1 col-sm-10">
        <div className="section-head">
          <div className="section-name">
            <span className="col-sm-1 ">编程题</span>
            <i className="fa fa-edit"></i>

            <div className="delete">
              <i className="fa fa-trash"></i>
            </div>

          </div>
          {
            homeworkQuiz.map((quiz, index) => {
              return (
                <HomeworkQuiz key={index} quiz={quiz}/>
              )
            })
          }
          <QuizAddButton sectionId={this.props.sectionId}/>
        </div>
      </div>

    );
  }
}
