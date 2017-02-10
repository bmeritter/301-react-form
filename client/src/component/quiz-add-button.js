import {Modal, Button} from 'react-bootstrap';
import React, {Component}  from 'react';


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
    this.props.initHomeworkQuiz();

    this.changeModelState();
    this.setState({
      homeworkQuiz: this.props.homeworkQuiz || {}
    });
  }

  handleChange(e) {
    const _id = e.target.value;
    const checked = e.target.checked;

    const homeworkItems = this.state.homeworkQuiz.items.map((item) => {
      return Object.assign({}, item, {
        checked: item._id === _id ? checked : item.checked
      });
    });
    const homeworkQuiz = {
      items: homeworkItems,
      totalCount: this.state.homeworkQuiz.totalCount
    };
    this.setState({
      homeworkQuiz
    });

  }

  addQuiz() {
    this.changeModelState();

    let homework = this.state.homeworkQuiz.items || [];
    let quizzes = homework.filter(({checked}) => {
      return checked === true;
    });
    if (quizzes.length === 0) {
      return;
    }
    quizzes = quizzes.map((item) => {
      return item._id;
    });
    this.props.addHomeworkQuiz(quizzes);
  }

  render() {
    let quizItems = this.state.homeworkQuiz.items || [];

    const HomeworkQuiz = ({title, stack, checked, _id}) => {
      return (
        <tr>
          <th><input type="checkbox" checked={checked} value={_id} onChange={this.handleChange.bind(this)}/></th>
          <th>{title}</th>
          <th>{stack}</th>
        </tr>
      );
    };

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
            <Button bsStyle="primary" onClick={this.addQuiz.bind(this)}>确定</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}
