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
        <div className="quiz-btn" onClick={this.loadHomeworkQuiz.bind(this)}>
          <i className="section-icon fa fa-plus fa-small"></i>
        </div>

        <Modal show={this.state.modelState}>
          <Modal.Header>
            <Modal.Title>试题列表</Modal.Title>
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
                quizItems.map((quiz) => {
                  return (
                    <HomeworkQuiz {...quiz}/>
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
