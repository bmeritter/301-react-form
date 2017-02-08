import React from 'react';
import {Component} from 'react';

export default class LogicPuzzle extends Component {
  render() {
    return (
      <div id="logic-puzzle">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">逻辑题</label>
            <div className="checkbox col-sm-1">
              <label>
                <input type="checkbox"/>
              </label>
            </div>
          </div>
        </form>

        <div className="difficult-setter col-sm-offset-3">
          <form className="form-inline">
            <div className="form-group">
              <label for="easy">简单</label>
              <input type="number" className="form-control" id="easy"/>
            </div>

            <div className="form-group">
              <label for="normal">一般</label>
              <input type="number" className="form-control" id="normal"/>
            </div>

            <div className="form-group">
              <label for="difficult">困难</label>
              <input type="number" className="form-control" id="difficult"/>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

