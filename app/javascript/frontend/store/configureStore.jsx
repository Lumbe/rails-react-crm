import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {autoRehydrate} from 'redux-persist'
import {initialState} from '../reducers/initialState'
import configureLocalForage from './configureLocalForage'

configureLocalForage();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), autoRehydrate())
  );
}
