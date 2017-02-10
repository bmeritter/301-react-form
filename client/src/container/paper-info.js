import {connect} from 'react-redux';
import PaperInfo from '../component/paper-info';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    editPaper: (data) => {
      dispatch({type: 'EDIT_PAPER_INFO', data});
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PaperInfo);