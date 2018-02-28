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
      console.log('CREATE_USER_SESSION_SUCCESS action', action);
      setAuthHeaderToken(action.user.token);
      return {...state, ...action.user, isAuthenticated: true};
    case DESTROY_USER_SESSION_SUCCESS:
      removeAuthHeaderToken();
      return initialState.currentUser;
    default:
      return state;
  }
}
