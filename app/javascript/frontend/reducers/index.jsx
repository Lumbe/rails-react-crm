import {combineReducers} from 'redux';
import {leads} from './leadReducer';
import {contacts} from './contactReducer';
import currentUser from './authUserReducer';
import {user} from './userReducer';
import {notifications} from './notificationReducer'
import {projects, project} from './projectReducer'
import {entities} from './entitiesReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  // short hand property names:
  // 'user' translates to 'user: user'
  // so 'user' will contain value returned from function user (userReducer)
  currentUser,
  leads,
  contacts,
  user,
  notifications,
  projects,
  project,
  entities,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_USER_SESSION_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
