import {CREATE_USER_SESSION_SUCCESS, DESTROY_USER_SESSION_SUCCESS} from '../actions/authActions'
import {setAuthHeaderToken, removeAuthHeaderToken} from '../api/authApi'
import initialState from './initialState';
import {REHYDRATE} from 'redux-persist/constants'

export default function authUserReducer(state = initialState.currentUser, action) {
  switch(action.type) {
    case REHYDRATE:
      if (action.payload.currentUser && action.payload.currentUser.token) {
        setAuthHeaderToken(action.payload.currentUser.token);
      }
      return state;
    case CREATE_USER_SESSION_SUCCESS:
      setAuthHeaderToken(action.user.token);
      return {email: action.user.email, token: action.user.token, isAuthenticated: true, firstName: action.user.first_name, lastName: action.user.last_name}
    case DESTROY_USER_SESSION_SUCCESS:
      removeAuthHeaderToken();
      return {email: null, token: null, isAuthenticated: false}
    default:
      return state;
  }
}
