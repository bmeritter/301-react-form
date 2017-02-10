import {connect} from 'react-redux';
import Sections from '../component/sections';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSections: () => {
      dispatch({type: 'LOAD_SECTIONS'});
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sections);