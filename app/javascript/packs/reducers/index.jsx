
import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';
import {houseProjects, houseProject} from './houseProjectReducer';

const rootReducer = combineReducers({
  // short hand property names
  leads,
  lead,
  houseProjects,
  houseProject
})

export default rootReducer;
