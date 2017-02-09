import React from 'react';
import {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

const HomeworkQuiz = ({title, stack, _id}) => {
  return (
    <tr>
      <th><input type="checkbox"/></th>
      <th>{title}</th>
      <th>{stack}</th>
    </tr>
  );
};

export default class QuizAddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelState: false,
      homeworkQuiz: {}
    }
  }

  changeModelState() {
    this.setState({
      modelState: !this.state.modelState,
    });
  }

  loadHomeworkQuiz() {
    this.changeModelState();
    this.props.initHomeworkQuiz();
    this.setState({
      homeworkQuiz: this.props || {}
    });
  }

  render() {
    let quizItems = this.state.homeworkQuiz.items || [];
    return (
      <div>
        <div className="quiz-btn">
          <i className="section-icon fa fa-plus fa-small" onClick={this.loadHomeworkQuiz.bind(this)}></i>
        </div>

        <Modal show={this.state.modelState}>
          <Modal.Header>
            <Modal.Title>试题列表
              <i className="fa fa-remove pull-right" onClick={this.changeModelState.bind(this)}></i>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <table className="table table-striped table-bordered table-hover">
              <thead>
              <tr>
                <th></th>
                <th>名称</th>
                <th>技术栈</th>
              </tr>
              </thead>
              <tbody>

              {
                quizItems.map((quiz, index) => {
                  return (
                    <HomeworkQuiz key={index} {...quiz}/>
                  );
                })
              }

              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.changeModelState.bind(this)}>确定</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}
