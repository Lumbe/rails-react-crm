import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';
import currentUser from './authUserReducer';
import {user} from './userReducer';
import {houseProjects, houseProject} from './houseProjectReducer';
import {notifications} from './notificationReducer'
import {projects, project} from './projectReducer'

const appReducer = combineReducers({
  // short hand property names
  currentUser,
  leads,
  lead,
  houseProjects,
  houseProject,
  user,
  notifications,
  projects,
  project
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_USER_SESSION_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
