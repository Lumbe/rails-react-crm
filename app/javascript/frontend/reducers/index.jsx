import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';
import currentUser from './authUserReducer';
import {user} from './userReducer';
import {houseProjects, houseProject} from './houseProjectReducer';
import {notifications} from './notificationReducer'
import {projects, project} from './projectReducer'

const apiPath = '/api/v1/';
const baseURL = () => {return process.env.NODE_ENV === 'production' ? 'https://api.servus.vn.ua' + apiPath : 'http://localhost:5000' + apiPath};

const appReducer = combineReducers({
  // short hand property names
  baseURL,
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
