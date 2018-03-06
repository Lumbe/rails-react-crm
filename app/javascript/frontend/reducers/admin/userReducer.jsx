import {
  LOAD_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from '../../actions/admin/userActions';
import initialState from '../initialState';
import {denormalize} from 'normalizr'
import {userSchema, userListSchema} from "../../api/schema";
import {cloneDeep} from 'lodash'


export function users(state = initialState.users, action) {
  let newState = null;
  switch(action.type) {
    case LOAD_USERS_SUCCESS:
      newState = cloneDeep(state);
      newState.data = action.result;
      newState.meta = action.meta;
      return newState;
    case CREATE_USER_SUCCESS:
      newState = cloneDeep(state);
      newState.data = [action.result, ...newState.data];
      return newState;
    case DELETE_USER_SUCCESS:
      newState = cloneDeep(state);
      newState.data = newState.data.filter((id) => {return id !== action.id});
      return newState;
    default:
      return state;
  }
}

export function getUsers(state) {
  let users = denormalize(state.users.data || [], userListSchema, state.entities);
  const meta = state.users.meta;
  return {
    users,
    meta
  }
}

export function getUser(state, id) {
  let user = denormalize(id, userSchema, state.entities);
  return user
}