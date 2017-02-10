import React, {Component}  from 'react';

export default class PaperSubmit extends Component {
  render() {
    return (
      <div className="paper-submit">
        <div className="col-sm-offset-4 col-sm-2">
          <button type="button" className="paper-btn btn btn-primary btn-lg btn-block">保存</button>
        </div>
        <div className="col-sm-2">
          <button type="button" className="paper-btn btn btn-primary btn-lg btn-block">发布</button>
        </div>
      </div>
    );
  }
}
