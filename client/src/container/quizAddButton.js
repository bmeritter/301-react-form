import {connect} from 'react-redux';
import QuizAddButton from '../component/QuizAddButton';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    initHomeworkQuiz: () => {
      dispatch({type: 'INIT_HOMEWORKQUIZ'});
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizAddButton);