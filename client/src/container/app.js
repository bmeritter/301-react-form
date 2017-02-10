import {connect} from 'react-redux';
import Paper from '../component/app';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    initPaperData: () => {
      dispatch({type: 'INIT_PAPER_DATA'});
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Paper);