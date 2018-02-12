import {
  LOAD_LEADS_SUCCESS,
  LOAD_LEADS_FAILURE,
  LOAD_LEAD_SUCCESS,
  LOAD_LEAD_FAILURE,
  CREATE_LEAD_SUCCESS,
  CREATE_LEAD_FAILURE,
  UPDATE_LEAD_SUCCESS,
  UPDATE_LEAD_FAILURE,
  RESET_LEAD
} from '../actions/leadActions';
import initialState from './initialState';

export function leads(state = initialState.leads, action) {
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      return {...state, leads: action.data.leads, meta: action.data.meta};
    case LOAD_LEADS_FAILURE:
      console.log('action', action);
      return {leads: [], meta: {}};
    default:
      return state;
  }
}

export function lead(state = initialState.lead, action) {
  switch(action.type) {
    case LOAD_LEAD_SUCCESS:
      return action.lead;
    case LOAD_LEAD_FAILURE:
      return {};
    case CREATE_LEAD_SUCCESS:
      return action.lead;
    case CREATE_LEAD_FAILURE:
      return {};
    case UPDATE_LEAD_SUCCESS:
      return action.lead;
    case UPDATE_LEAD_FAILURE:
      return state;
    case RESET_LEAD:
      return {};
    default:
      return state;
  }
}


