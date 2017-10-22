import authApi from '../api/authApi';

export const CREATE_USER_SESSION_SUCCESS = 'CREATE_USER_SESSION_SUCCESS';
export const DESTROY_USER_SESSION_SUCCESS = 'DESTROY_USER_SESSION_SUCCESS';

// Actions
export function createUserSessionSuccess(user) {
  return {type: CREATE_USER_SESSION_SUCCESS, user}
}

export function destroyUserSessionSuccess() {
  return {type: DESTROY_USER_SESSION_SUCCESS}
}

export function createUserSession(user_credentials) {
  return function(dispatch) {
    return authApi.createSession(user_credentials).then(response => {
      dispatch(createUserSessionSuccess(response.data.user));
    })
  };
}

export function destroyUserSession() {
  return destroyUserSessionSuccess();
}
