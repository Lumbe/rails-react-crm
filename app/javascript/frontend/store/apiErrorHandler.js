import {destroyUserSession} from '../actions/authActionsMiddleware'
import {createNotification} from "../actions/notificationActions";
import {push} from 'react-router-redux'

export default store => next => action => {

  // Checks to see if the action has a payload and if the payload is an ApiError

  if (action.payload && action.payload.name === 'ApiError' && action.payload.status !== 422) {
    console.log('ApiError occurs', action);
    if (action.payload.status === 403) {
        // show notification
        store.dispatch(createNotification({
          type: 'error',
          message: action.payload.message
        }));
        // redirect to index page
        store.dispatch(push('/'))
    } else if (action.payload.status === 401) {
      store.dispatch(destroyUserSession());
      store.dispatch(push('/users/sign-in'));
      store.dispatch(createNotification({
        type: 'error',
        message: 'Ваша сессия окончилась. Войдите в систему повторно.'
      }))
    } else if (action.payload.status === 404) {
      store.dispatch(push('/404'));
      store.dispatch(createNotification({
        type: 'info',
        message: action.payload.response.error || 'Объект не найден'
      }));
    }
    // else if (action.payload.status === 422) {
    //   // unprocessable entity
    //   let errors = action.payload.response.errors;
    //   let message = [];
    //   for (let error in errors) {
    //     if (errors.hasOwnProperty(error)) {
    //       message.push(error + ': ' + errors[error])
    //     }
    //   }
    //   return store.dispatch(createNotification({
    //     type: 'error',
    //     message: message || 'Something went wrong.'
    //   }))
    // }
    else if (action.payload.status >= 500) {
      store.dispatch(createNotification({
        type: 'error',
        message: ("Server Error: " + action.payload.message) || 'Server Error'
      }));
    }
  } else {
    // So the middleware doesn't get applied to every single action
    return next(action)
  }
}