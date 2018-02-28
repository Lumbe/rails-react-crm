import {LOAD_CURRENT_USER_SUCCESS} from '../actions/userActions';
import initialState from './initialState';

export function user(state = initialState.currentUser, action) {
  switch(action.type) {
    case LOAD_CURRENT_USER_SUCCESS:
      return {...state, ...action.user};
    default:
      return state;
  }
}

// export function getCurrentUser(state, id) {
//   let user = denormalize(id, userSchema, state.entities);
//   return {
//     currentUser: user
//   }
// }