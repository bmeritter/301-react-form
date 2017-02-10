import {connect} from 'react-redux';
import LogicPuzzle from '../component/logic-puzzle';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogicPuzzle: (data) => {
      dispatch({type: 'UPDATE_LOGIC_PUZZLE', data});
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);