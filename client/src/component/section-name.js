import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class SectionName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
  }

  showModal() {
    this.setState({
      modalState: true
    });
  }

  hideModal() {
    this.setState({
      modalState: false
    });
  }

  deleteSection() {
    this.hideModal();

    this.props.deleteSection({sectionId: this.props.sectionId});
  }


  render() {
    return (
      <div>
        <div className="section-name">
          <span className="col-sm-1 ">{this.props.title}</span>
          <i className="fa fa-edit"></i>

          <div className="delete">
            <i className="fa fa-trash" onClick={this.showModal.bind(this)}></i>
          </div>
        </div>

        <Modal show={this.state.modalState}>
          <Modal.Header>
            <Modal.Title>删除提示</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            确定要删除这个 Section？
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.hideModal.bind(this)}>取消</Button>
            <Button bsStyle="primary" onClick={this.deleteSection.bind(this)}>确定</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}
