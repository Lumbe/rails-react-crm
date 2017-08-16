
import {combineReducers} from 'redux';
import {leads, lead} from './leadReducer';
import currentUser from './authUserReducer';
import {houseProjects, houseProject} from './houseProjectReducer';


const appReducer = combineReducers({
  // short hand property names
  leads,
  lead,
  houseProjects,
  houseProject,
  currentUser
})

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_USER_SESSION_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
