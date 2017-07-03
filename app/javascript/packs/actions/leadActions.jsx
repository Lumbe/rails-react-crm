import * as types from './actionTypes';
import leadApi from '../api/leadApi';

export function loadLeadsSuccess(leads) {
  return {type: types.LOAD_LEADS_SUCCESS, leads};
}
export function createLeadSuccess(lead) {
  return {type: types.CREATE_LEAD_SUCCESS, lead}
}
export function showLeadSuccess(lead) {
  return {type: types.SHOW_LEAD_SUCCESS, lead};
}
export function updateLeadSuccess(lead) {
  return {type: types.UPDATE_LEAD_SUCCESS, lead}
}
export function deleteLeadSuccess(lead) {
  return {type: types.DELETE_LEAD_SUCCESS, lead}
}


export function loadLeads() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.getAll().then(response => {
      dispatch(loadLeadsSuccess(response.data));
    })
  };
}
