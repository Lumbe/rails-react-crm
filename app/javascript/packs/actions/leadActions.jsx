import leadApi from '../api/leadApi';
import * as notificationActions from './notificationActions'
// Action types
// export const LOAD_LEADS_SUCCESS = 'LOAD_LEADS_SUCCESS';
// export const LOAD_LEAD_SUCCESS = 'LOAD_LEAD_SUCCESS';

//Lead list
export const LOAD_LEADS = 'LOAD_LEADS';
export const LOAD_LEADS_SUCCESS = 'LOAD_LEADS_SUCCESS';
export const LOAD_LEADS_FAILURE = 'LOAD_LEADS_FAILURE';

//Create new lead
export const CREATE_LEAD = 'CREATE_LEAD';
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const CREATE_LEAD_FAILURE = 'CREATE_LEAD_FAILURE';

//Validate lead fields like Name, Phone on the server
export const VALIDATE_LEAD_FIELDS = 'VALIDATE_LEAD_FIELDS';
export const VALIDATE_LEAD_FIELDS_SUCCESS = 'VALIDATE_LEAD_FIELDS_SUCCESS';
export const VALIDATE_LEAD_FIELDS_FAILURE = 'VALIDATE_LEAD_FIELDS_FAILURE';

//Load lead
export const LOAD_LEAD = 'LOAD_LEAD';
export const LOAD_LEAD_SUCCESS = 'LOAD_LEAD_SUCCESS';
export const LOAD_LEAD_FAILURE = 'LOAD_LEAD_FAILURE';
export const RESET_LEAD = 'RESET_LEAD';

//Delete lead
export const DELETE_LEAD = 'DELETE_LEAD';
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';
export const DELETE_LEAD_FAILURE = 'DELETE_LEAD_FAILURE';




// Actions
//Lead list
export function loadLeadsSuccess(leads) {
  return {type: LOAD_LEADS_SUCCESS, leads};
}
export function loadLeadsFailure() {
  return {type: LOAD_LEADS_FAILURE, leads: []}
}
export function createLeadSuccess(lead) {
  return {type: CREATE_LEAD_SUCCESS, lead}
}
export function loadLeadSuccess(lead) {
  return {type: LOAD_LEAD_SUCCESS, lead};
}
export function loadLeadFailure() {
  return {type: LOAD_LEAD_SUCCESS, lead: {}};
}
export function updateLeadSuccess(lead) {
  return {type: UPDATE_LEAD_SUCCESS, lead}
}
export function deleteLeadSuccess(lead) {
  return {type: DELETE_LEAD_SUCCESS, lead}
}

export function resetLeadSuccess() {
  return {type: RESET_LEAD, lead: {}}
}


// Dispatch actions and send to reducers with redux-thunk
export function loadLeads() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.getAll().then(
      response => {
        dispatch(loadLeadsSuccess(response.data.leads));
        },
      error => {
        leadApi.catchError(error);
        dispatch(loadLeadsFailure());
    })
  }
}

export function loadLead(lead_id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.getOne(lead_id).then(
      response => {
        dispatch(loadLeadSuccess(response.data.lead));
      },
      error => {
        leadApi.catchError(error);
        dispatch(loadLeadFailure());
      }
    )
  };
}

export function createLead(lead) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.create(lead).then(
      response => {
        dispatch(createLeadSuccess(response.data.lead));
        return response;
      },
      error => {
        leadApi.catchError(error);
        // dispatch(createLeadFailure());
      }
    )
  };
}

export function resetLead() {
  return function(dispatch) {
    dispatch(resetLeadSuccess());
  };
}
