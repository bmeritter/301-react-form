import {connect} from 'react-redux';
import SectionName from '../component/section-name';

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


export default connect(mapStateToProps, mapDispatchToProps)(SectionName);