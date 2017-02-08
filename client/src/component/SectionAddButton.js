import React from 'react';
import {Component} from 'react';

export default class SectionAddButton extends Component {
  render() {
    return (
      <div>
        <div id="section-button" className="col-sm-offset-1 col-sm-10 text-center">
          <i className="section-icon fa fa-plus"></i>
        </div>
      </div>
    );
  }
}
