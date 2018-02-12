import leadApi from '../api/leadApi';
import {createNotification} from "./notificationActions";


export const LOAD_LEADS_SUCCESS = 'LOAD_LEADS_SUCCESS';
export const LOAD_LEADS_FAILURE = 'LOAD_LEADS_FAILURE';

//Create new lead
export const CREATE_LEAD = 'CREATE_LEAD';
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const CREATE_LEAD_FAILURE = 'CREATE_LEAD_FAILURE';

// Update lead
export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';
export const UPDATE_LEAD_FAILURE = 'UPDATE_LEAD_FAILURE';

//Load lead
export const LOAD_LEAD_SUCCESS = 'LOAD_LEAD_SUCCESS';
export const LOAD_LEAD_FAILURE = 'LOAD_LEAD_FAILURE';
export const RESET_LEAD = 'RESET_LEAD';

//Delete lead
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
export function createLeadFailure() {
  return {type: CREATE_LEAD_FAILURE}
}
export function loadLeadSuccess(lead) {
  return {type: LOAD_LEAD_SUCCESS, lead};
}
export function loadLeadFailure() {
  return {type: LOAD_LEAD_FAILURE};
}
export function updateLeadSuccess(lead) {
  return {type: UPDATE_LEAD_SUCCESS, lead}
}
export function updateLeadFailure(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'error',
      message: message
    }));
  }
}
export function destroyLeadSuccess(message) {
  return dispatch => {
    dispatch(createNotification({
      type: 'info',
      message: message
    }));
  }
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
        dispatch(loadLeadsSuccess(response.data));
        },
      error => {
        dispatch({type: LOAD_LEADS_FAILURE});
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
        dispatch(createLeadFailure());
      }
    )
  };
}

export function updateLead(lead) {
  return function(dispatch) {
    return leadApi.update(lead).then(
      response => {
        dispatch(updateLeadSuccess(response.data.lead));
        return response;
      },
      error => {
        dispatch(updateLeadFailure('Не удалось изменить лид'));
      }
    )
  };
}

export function destroyLead(lead) {
  return function(dispatch) {
    return leadApi.destroy(lead).then(
      response => {
        dispatch(destroyLeadSuccess(`Лид ${lead.name} был удален`));
      },
      error => {
        dispatch(destroyLeadFailure(`Не удалось удалить лид ${lead.name}`));
      }
    )
  };
}

export function resetLead() {
  return function(dispatch) {
    dispatch({type: RESET_LEAD});
  };
}
