import React, {Component}  from 'react';

export default class PaperInfo extends Component {
  editPaperName() {
    this.props.editPaper({name: this.name.value});
  }

  editPaperDescription() {
    this.props.editPaper({description: this.description.value});
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="paper-header">
          <span>新增试卷</span>
        </div>

        <div className="paper-info">

          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">试卷名称</label>
              <div className="col-sm-8">
                <input type="text" className="form-control"
                       placeholder="请输入试卷名称" ref={(ref) => {
                  this.name = ref;
                }} onBlur={this.editPaperName.bind(this)}/>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">试卷描述</label>
              <div className="col-sm-8">
                <textarea className="form-control" placeholder="请输入试卷描述"
                          ref={(ref) => {
                            this.description = ref;
                          }} onBlur={this.editPaperDescription.bind(this)}/>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}