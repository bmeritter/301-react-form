import {combineReducers} from 'redux';
import paper from './paper';
import homeworkQuiz from './homework-quiz';
import logicPuzzle from './logic-puzzle';
import sections from './sections';

const rootReducer = combineReducers({
  homeworkQuiz,
  paper,
  logicPuzzle,
  sections
});

export default rootReducer;