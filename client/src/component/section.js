import React, {Component}  from 'react';

import QuizAddButton from '../container/quiz-add-button';
import HomeworkQuiz from './homework-quiz';

export default class Section extends Component {
  deleteSection() {
    this.props.deleteSection({sectionId: this.props.sectionId});
  }

  render() {
    let homeworkQuiz = this.props.definition.quizzes || [];

    return (
      <div className="section col-sm-offset-1 col-sm-10">
        <div className="section-head">
          <div className="section-name">
            <span className="col-sm-1 ">{this.props.title || ''}</span>
            <i className="fa fa-edit"></i>

            <div className="delete">
              <i className="fa fa-trash" onClick={this.deleteSection.bind(this)}></i>
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
