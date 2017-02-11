import React, {Component}  from 'react';

export default class SectionAddButton extends Component {
  handleClick() {
    this.props.addSection();
  }

  render() {
    return (
      <div className="section-button col-sm-offset-1 col-sm-10 text-center">
        <i className="section-icon fa fa-plus" onClick={this.handleClick.bind(this)}></i>
      </div>
    );
  }
}
