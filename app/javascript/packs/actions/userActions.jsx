import userApi from '../api/userApi';

//User list
export const SIGN_IN_USER = 'SIGN_IN_USER'
export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS'
export const CREATE_USER_SESSION_SUCCESS = 'CREATE_USER_SESSION_SUCCESS'

export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS';

export const LOAD_USER = 'LOAD_USERS';
export const LOAD_USER_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

// Actions

export function loadCurrentUserSuccess(user) {
  return {type: LOAD_CURRENT_USER_SUCCESS, user};
}

export function createUserSessionSuccess(user) {
  return {type: CREATE_USER_SESSION_SUCCESS, user}
}


export function createUserSuccess(user) {
  return {type: CREATE_USER_SUCCESS, user}
}
export function loadUserSuccess(user) {
  return {type: LOAD_USER_SUCCESS, user};
}
export function updateUserSuccess(user) {
  return {type: UPDATE_USER_SUCCESS, user}
}
export function deleteUserSuccess(user) {
  return {type: DELETE_USER_SUCCESS, user}
}

export function resetUserSuccess() {
  return {type: RESET_USER, user: {}}
}


export function loadCurrentUser(token) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.loadCurrentUser(token).then(response => {
      dispatch(loadCurrentUserSuccess(response.data.user));
    })
  };
}

export function createUserSession(user) {
  return function(dispatch) {
    return userApi.createSession(user).then(response => {
      dispatch(createUserSessionSuccess(response.data.user));
    })
  };
}

export function resetUser() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(resetUserSuccess());
  };
}
