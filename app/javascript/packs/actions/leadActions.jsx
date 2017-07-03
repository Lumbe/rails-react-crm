import * as types from './actionTypes';
import leadApi from '../api/leadApi';

export function loadLeadsSuccess(leads) {
  return {type: types.LOAD_LEADS_SUCCESS, leads};
}

export function loadLeads() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.getAll().then(response => {
      dispatch(loadLeadsSuccess(response.data));
    })
  };
}
