import { CALL_API } from 'redux-api-middleware';

export const LOAD_LEADS = 'LOAD_LEADS';
export const LOAD_LEADS_SUCCESS = 'LOAD_LEADS_SUCCESS';
export const LOAD_LEADS_FAILURE = 'LOAD_LEADS_FAILURE';

export const LOAD_LEAD = 'LOAD_LEAD';
export const LOAD_LEAD_SUCCESS = 'LOAD_LEAD_SUCCESS';
export const LOAD_LEAD_FAILURE = 'LOAD_LEAD_SUCCESS';

export const RESET_LEAD = 'RESET_LEAD';

export const CREATE_LEAD_REQUEST = 'CREATE_LEAD_REQUEST';
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const CREATE_LEAD_FAILURE = 'CREATE_LEAD_SUCCESS';

export const UPDATE_LEAD = 'UPDATE_LEAD';
export const UPDATE_LEAD_SUCCESS = 'UPDATE_LEAD_SUCCESS';
export const UPDATE_LEAD_FAILURE = 'UPDATE_LEAD_SUCCESS';

export const DELETE_LEAD = 'DELETE_LEAD';
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';
export const DELETE_LEAD_FAILURE = 'DELETE_LEAD_FAILURE';


export const loadLeads = (params=null) => ({
    [CALL_API]: {
      types: [LOAD_LEADS, LOAD_LEADS_SUCCESS, LOAD_LEADS_FAILURE],
      endpoint: (state) => {
        console.log('params', params);
        let queryString = params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : '';
        return state.baseURL + 'leads' + queryString;
      },
      method: 'GET',
      headers: (state) => {
        return {
          'Authorization': `Bearer ${state.currentUser.token}`
        }
      }
    }
  });

export const loadLead = (leadId) => ({
  [CALL_API]: {
    types: [LOAD_LEAD, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE],
    endpoint: (state) => {return state.baseURL + `leads/${leadId}`},
    method: 'GET',
    headers: (state) => ({
      'Authorization': `Bearer ${state.currentUser.token}`
    })
  }
});

export const createLead = (data) => ({
  [CALL_API]: {
    types: [CREATE_LEAD_REQUEST, CREATE_LEAD_SUCCESS, CREATE_LEAD_FAILURE],
    endpoint: (state) => {return state.baseURL + 'leads'},
    method: 'POST',
    headers: (state) => {return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${state.currentUser.token}`
    }},
    body: JSON.stringify({lead: data})
  }
});

export const updateLead = (data) => ({
  [CALL_API]: {
    types: [UPDATE_LEAD, UPDATE_LEAD_SUCCESS, UPDATE_LEAD_FAILURE],
    endpoint: (state) => {return state.baseURL + `leads/${data.id}`},
    method: 'PUT',
    headers: (state) => {return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${state.currentUser.token}`
    }},
    body: JSON.stringify({lead: data})
  }
});

export const destroyLead = (id) => ({
  [CALL_API]: {
    types: [DELETE_LEAD, DELETE_LEAD_SUCCESS, DELETE_LEAD_FAILURE],
    endpoint: (state) => {return state.baseURL + `leads/${id}`},
    method: 'DELETE',
    headers: (state) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${state.currentUser.token}`
    })
  }
});

export const resetLeadAction = () => ({
  type: RESET_LEAD,
  lead: {}
});

export const resetLead = () => {
  return (dispatch) => {
    dispatch(resetLeadAction());
  }
};
