import userApi from '../../api/admin/userApi';
import {createNotification} from "../notificationActions";
import {userSchema, userListSchema} from "../../api/schema";
import {normalize} from 'normalizr'

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';

//Create new user
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

// Update user
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

//Load user
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

//Delete user
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';


// Actions
//User list
export function loadUsersSuccess(users, meta) {
  return {type: LOAD_USERS_SUCCESS, ...normalize(users, userListSchema), meta};
}

export function createUserSuccess(data) {
  return {type: CREATE_USER_SUCCESS, ...normalize(data, userSchema)}
}
export function createUserFailure() {
  return {type: CREATE_USER_FAILURE}
}
export function loadUserSuccess(data) {
  return {type: LOAD_USER_SUCCESS, ...normalize(data, userSchema)};
}
export function loadUserFailure() {
  return {type: LOAD_USER_FAILURE};
}
export function updateUserSuccess(data) {
  return {type: UPDATE_USER_SUCCESS, ...normalize(data, userSchema)}
}
export function updateUserFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}
export function destroyUserSuccess(id) {
  return {type: DELETE_USER_SUCCESS, id}
}

export function destroyUserFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}

export function loadUsers(params = null) {
  return function(dispatch) {
    return userApi.getAll(params).then(
      response => {
        dispatch(loadUsersSuccess(response.data.users, response.data.meta));
        },
      () => dispatch({type: LOAD_USERS_FAILURE})
    )
  }
}

export function loadUser(user_id) {
  return function(dispatch) {
    return userApi.getOne(user_id).then(
      response => {
        dispatch(loadUserSuccess(response.data.user));
      },
      () => dispatch(loadUserFailure())
    )
  }
}

export function createUser(user) {
  return function(dispatch) {
    return userApi.create(user).then(
      response => {
        dispatch(createUserSuccess(response.data.user));
        return response;
      }
    )
  };
}

export function updateUser(user) {
  return function(dispatch) {
    return userApi.update(user).then(
      response => {
        dispatch(updateUserSuccess(response.data.user));
        return response;
      },
      error => {
        dispatch(updateUserFailure('Не удалось изменить пользователя'));
        return Promise.reject(error);
      }
    )
  };
}

export function destroyUser(user) {
  return function(dispatch) {
    return userApi.destroy(user).then(
      () => {
        dispatch(destroyUserSuccess(user.id));
        dispatch(createNotification({
          type: 'info',
          message: `Пользователь ${user.first_name} ${user.last_name} был удален`
        }));
      },
      error => {
        dispatch(destroyUserFailure(`Не удалось удалить пользователя ${user.first_name} ${user.last_name}`));
        return Promise.reject(error);
      }
    )
  };
}
