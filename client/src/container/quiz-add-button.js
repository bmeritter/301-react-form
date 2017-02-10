import {connect} from 'react-redux';
import QuizAddButton from '../component/quiz-add-button';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    initHomeworkQuiz: () => {
      dispatch({type: 'INIT_HOMEWORKQUIZ'});
    },
    addHomeworkQuiz: () => {

    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizAddButton);