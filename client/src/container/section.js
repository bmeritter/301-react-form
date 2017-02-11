import {connect} from 'react-redux';
import Section from '../component/section';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSection: (data) => {
      dispatch({type: 'DELETE_SECTIONS', data});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Section);