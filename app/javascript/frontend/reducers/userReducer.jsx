import {LOAD_CURRENT_USER_SUCCESS} from '../actions/userActions';
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

export function user(state = initialState.user, action) {
  switch(action.type) {
    case LOAD_CURRENT_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
}
