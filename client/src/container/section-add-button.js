import {connect} from 'react-redux';
import SectionAddButton from '../component/section-add-button';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSection: () => {
      dispatch({type: 'ADD_SECTION'});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SectionAddButton);