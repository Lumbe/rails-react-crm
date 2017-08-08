import userApi from '../api/userApi';

//User list
export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_USER = 'LOAD_USERS';
export const LOAD_USER_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

// Actions

export function loadCurrentUserSuccess(user) {
  return {type: LOAD_CURRENT_USER_SUCCESS, user};
}

export function loadUsersSuccess(users) {
  return {type: LOAD_USERS_SUCCESS, users};
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

// Dispatch actions and send to reducers with redux-thunk
export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.getAll().then(response => {
      dispatch(loadUsersSuccess(response.data.users));
    })
  };
}

export function loadUser(userId) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.getOne(userId).then(response => {
      dispatch(loadUserSuccess(response.data.user));
    })
  };
}

export function resetUser() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(resetUserSuccess());
  };
}
