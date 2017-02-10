import {connect} from 'react-redux';
import LogicPuzzle from '../component/logic-puzzle';

const mapStateToProps = (state) => {
  return {logicPuzzle: state.logicPuzzle};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogicPuzzle: (data) => {
      dispatch({type: 'UPDATE_LOGIC_PUZZLE', data});
    },
    initLogicPuzzle: () => {
      dispatch({type: 'INIT_LOGIC-PUZZLE'});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);