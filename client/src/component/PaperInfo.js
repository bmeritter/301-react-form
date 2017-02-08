import React from 'react';
import {Component} from 'react';

export default class PaperInfo extends Component {
  render() {
    return (
      <div id="paper">
        <div className="paper-header">
          <span>新增试卷</span>
        </div>

        <div className="paper-info">

          <form className="form-horizontal">
            <div className="form-group">
              <label for="paperName" className="col-sm-2 control-label">试卷名称</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="paperName" placeholder="请输入试卷名称"/>
              </div>
            </div>

            <div className="form-group">
              <label for="paperDescription" className="col-sm-2 control-label">试卷描述</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="paperDescription" placeholder="请输入试卷描述"/>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}