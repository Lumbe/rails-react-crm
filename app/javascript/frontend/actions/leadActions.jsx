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

// Update lead
export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';

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
export function loadLeadsSuccess(data) {
  return {type: LOAD_LEADS_SUCCESS, data};
}

export function createLeadSuccess(lead) {
  return {type: CREATE_LEAD_SUCCESS, lead}
}
export function loadLeadSuccess(lead) {
  return {type: LOAD_LEAD_SUCCESS, lead};
}
export function loadLeadFailure() {
  return {type: LOAD_LEAD_FAILURE, lead: {}};
}
export function updateLeadSuccess(lead) {
  return {type: UPDATE_LEAD_SUCCESS, lead}
}
export function deleteLeadSuccess(lead) {
  return {type: DELETE_LEAD_SUCCESS, lead}
}


export function loadLeads(params = null) {
  return function(dispatch) {
    return leadApi.getAll(params).then(
      response => {
        dispatch(loadLeadsSuccess(response.data));
        },
      error => {
        dispatch({type: LOAD_LEADS_FAILURE});
        leadApi.catchError(error);
    })
  }
}

export function loadLead(lead_id) {
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

export function updateLead(lead) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.update(lead).then(
      response => {
        dispatch(updateLeadSuccess(response.data.lead));
        return response;
      },
      error => {
        leadApi.catchError(error);
        // dispatch(createLeadFailure());
      }
    )
  };
}

export function destroyLead(lead) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return leadApi.destroy(lead).then(
      response => {
        dispatch(updateLeadSuccess(response.data.lead));
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
    dispatch({type: RESET_LEAD});
  };
}
