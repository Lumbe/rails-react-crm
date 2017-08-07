export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS';
export const DESTROY_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';

// Actions
export function createSessionSuccess(auth) {
  return {type: CREATE_SESSION_SUCCESS, auth}
}

export function loadUserSuccess(user) {
  return {type: LOAD_CURRENT_USER_SUCCESS, user}
}

export function destroySessionSuccess() {
  return {type: DESTROY_SESSION_SUCCESS}
}
