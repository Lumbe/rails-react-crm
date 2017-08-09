
import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';
import {currentUser} from './userReducer';
import {houseProjects, houseProject} from './houseProjectReducer';

const rootReducer = combineReducers({
  // short hand property names
  leads,
  lead,
  houseProjects,
  houseProject,
  currentUser
})

export default rootReducer;
