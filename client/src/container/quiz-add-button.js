import {connect} from 'react-redux';
import QuizAddButton from '../component/quiz-add-button';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeworkQuiz: (data) => {
      dispatch({type: 'ADD_HOMEWORKQUIZ', data});
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizAddButton);