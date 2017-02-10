import {combineReducers} from 'redux';
import paper from './paper';
import homeworkQuiz from './homework-quiz';
import logicPuzzle from './logic-puzzle';

const rootReducer = combineReducers({
  homeworkQuiz,
  paper,
  logicPuzzle
});

export default rootReducer;