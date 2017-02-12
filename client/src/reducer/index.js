import {combineReducers} from 'redux';
import paper from './paper';
import logicPuzzle from './logic-puzzle';
import sections from './sections';

const rootReducer = combineReducers({
  paper,
  logicPuzzle,
  sections
});

export default rootReducer;