import React, {Component}  from 'react';

import QuizAddButton from '../container/quiz-add-button';
import HomeworkQuiz from './homework-quiz';
import SectionName from '../container/section-name';

export default class Section extends Component {

  render() {
    let homeworkQuiz = this.props.definition.quizzes || [];

    return (
      <div className="section col-sm-offset-1 col-sm-10">
        <SectionName sectionId={this.props.sectionId} title={this.props.title || ''}/>

        {
          homeworkQuiz.map((quiz, index) => {
            return (
              <HomeworkQuiz key={index} quiz={quiz}/>
            )
          })
        }
        <QuizAddButton sectionId={this.props.sectionId}/>
      </div>

    );
  }
}
