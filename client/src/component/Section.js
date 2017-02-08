import React from 'react';
import {Component} from 'react';

export default class Section extends Component {
  render() {
    return (
      <div id="section" className="col-sm-offset-1 col-sm-10">
        <div className="section-head">
          <div className="section-name">
            <span className="col-sm-1 ">编程题</span>
            <i className="fa fa-edit"></i>

            <div className="delete">
              <i className="fa fa-trash"></i>
            </div>

          </div>

          <div className="quiz-btn">
            <i className="section-icon fa fa-plus fa-small"></i>
          </div>
        </div>
      </div>

    );
  }
}
