import React, {Component} from 'react';

export default class SectionName extends Component {
  deleteSection() {
    this.props.deleteSection({sectionId: this.props.sectionId});
  }


  render() {
    return (
      <div className="section-name">
        <span className="col-sm-1 ">{this.props.title}</span>
        <i className="fa fa-edit"></i>

        <div className="delete">
          <i className="fa fa-trash" onClick={this.deleteSection.bind(this)}></i>
        </div>

      </div>
    );
  }
}
