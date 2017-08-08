import {LOAD_CURRENT_USER_SUCCESS, LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE} from '../actions/houseProjectActions';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export function users(state = initialState.users, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case LOAD_USERS_SUCCESS:
      return action.users
    default:
      return state;
  }
}

export function user(state = initialState.user, action) {
  switch(action.type) {
    case LOAD_USER_SUCCESS:
      return action.user
    case RESET_USER:
      return action.user
    case LOAD_CURRENT_USER_SUCCESS:
      console.log(action)
      return action.user
    default:
      return state;
  }
}
