import leadApi from '../api/leadApi';
import {createNotification} from "./notificationActions";
import {leadSchema, leadListSchema} from "../api/schema";
import {normalize} from 'normalizr'

export const LOAD_LEADS_SUCCESS = 'LOAD_LEADS_SUCCESS';
export const LOAD_LEADS_FAILURE = 'LOAD_LEADS_FAILURE';

//Create new lead
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const CREATE_LEAD_FAILURE = 'CREATE_LEAD_FAILURE';

// Update lead
export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';

//Load lead
export const LOAD_LEAD_SUCCESS = 'LOAD_LEAD_SUCCESS';
export const LOAD_LEAD_FAILURE = 'LOAD_LEAD_FAILURE';

//Delete lead
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';


// Actions
//Lead list
export function loadLeadsSuccess(leads, meta) {
  return {type: LOAD_LEADS_SUCCESS, ...normalize(leads, leadListSchema), meta};
}

export function createLeadSuccess(data) {
  return {type: CREATE_LEAD_SUCCESS, ...normalize(data, leadSchema)}
}
export function createLeadFailure() {
  return {type: CREATE_LEAD_FAILURE}
}
export function loadLeadSuccess(data) {
  return {type: LOAD_LEAD_SUCCESS, ...normalize(data, leadSchema)};
}
export function loadLeadFailure() {
  return {type: LOAD_LEAD_FAILURE};
}
export function updateLeadSuccess(data) {
  return {type: UPDATE_LEAD_SUCCESS, ...normalize(data, leadSchema)}
}
export function updateLeadFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}
export function destroyLeadSuccess(id) {
  return {type: DELETE_LEAD_SUCCESS, id}
}

export function destroyLeadFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}

export function loadLeads(params = null) {
  return function(dispatch) {
    return leadApi.getAll(params).then(
      response => {
        dispatch(loadLeadsSuccess(response.data.leads, response.data.meta));
        },
      () => dispatch({type: LOAD_LEADS_FAILURE})
    )
  }
}

export function loadLead(lead_id) {
  return function(dispatch) {
    return leadApi.getOne(lead_id).then(
      response => {
        dispatch(loadLeadSuccess(response.data.lead));
      },
      () => dispatch(loadLeadFailure())
    )
  }
}

export function createLead(lead) {
  return function(dispatch) {
    return leadApi.create(lead).then(
      response => {
        dispatch(createLeadSuccess(response.data.lead));
        return response;
      }
    )
  };
}

export function updateLead(lead) {
  return function(dispatch) {
    return leadApi.update(lead).then(
      response => {
        console.log('updateLead', response.data.lead);
        dispatch(updateLeadSuccess(response.data.lead));
        return response;
      },
      error => {
        dispatch(updateLeadFailure('Не удалось изменить лид'));
        return Promise.reject(error);
      }
    )
  };
}

export function destroyLead(lead) {
  return function(dispatch) {
    return leadApi.destroy(lead).then(
      () => {
        dispatch(destroyLeadSuccess(lead.id));
        dispatch(createNotification({
          type: 'info',
          message: `Лид ${lead.name} был удален`
        }));
      },
      error => {
        dispatch(destroyLeadFailure(`Не удалось удалить лид ${lead.name}`))
        return Promise.reject(error);
      }
    )
  };
}
