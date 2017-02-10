import {combineReducers} from 'redux';
import paper from './paper';
import homeworkQuiz from './homework-quiz';

const rootReducer = combineReducers({
  homeworkQuiz,
  paper
});

export default rootReducer;