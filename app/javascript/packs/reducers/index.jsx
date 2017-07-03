
import {combineReducers} from 'redux';
import leads from './leadReducer';

const rootReducer = combineReducers({
  // short hand property names
  leads
})

export default rootReducer;
