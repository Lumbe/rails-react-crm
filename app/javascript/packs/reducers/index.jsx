
import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';

const rootReducer = combineReducers({
  // short hand property names
  leads,
  lead
})

export default rootReducer;
