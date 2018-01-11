import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import {autoRehydrate} from 'redux-persist'
import {initialState} from '../reducers/initialState'
import configureLocalForage from './configureLocalForage'
import apiErrorHandler from "./apiErrorHandler";

configureLocalForage();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, apiMiddleware, apiErrorHandler), autoRehydrate())
  );
}
