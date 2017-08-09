import {LOAD_CURRENT_USER_SUCCESS, LOAD_USERS_SUCCESS, CREATE_USER_SESSION_SUCCESS} from '../actions/userActions';
import initialState from './initialState';
import {browserHistory} from 'react-router';

// export function users(state = initialState.users, action) {
//   switch(action.type) {
//     case LOAD_USERS_SUCCESS:
//       return action.users
//     default:
//       return state;
//   }
// }

export function currentUser(state = initialState.currentUser, action) {
  switch(action.type) {
    case LOAD_CURRENT_USER_SUCCESS:
      return action.user
    case CREATE_USER_SESSION_SUCCESS:
      return action.data
    default:
      return state;
  }
}
