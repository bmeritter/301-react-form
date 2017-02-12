import React, {Component}  from 'react';

import LogicInput from './logic-input';

export default class LogicPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: this.props.logicPuzzle,
    }
  }

  componentDidMount() {
    this.props.initLogicPuzzle();
  }

  changeLogicState() {
    this.setState({
      inputState: !this.state.inputState,
    }, () => {
      this.logic.checked = this.state.inputState;
      this.handleUpdateLogic();
    });
  }

  handleUpdateLogic(definition) {
    this.props.updateLogicPuzzle(definition);
  }

  render() {
    return (
      <div className="logic-puzzle">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">逻辑题</label>
            <div className="checkbox col-sm-1">
              <input type="checkbox"
                     ref={(ref) => {
                       this.logic = ref;
                     }}
                     checked={this.state.inputState}
                     onChange={this.changeLogicState.bind(this)}/>
            </div>
          </div>
        </form>

        <LogicInput inputChange={this.handleUpdateLogic.bind(this)}
                    logicPuzzle={this.props.logicPuzzle || {}}
                    inputState={!this.state.inputState}/>

      </div>
    );
  }
}

