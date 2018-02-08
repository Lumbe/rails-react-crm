import {LOAD_LEADS_SUCCESS,LOAD_LEADS_FAILURE, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE, RESET_LEAD} from '../actions/leadActions';
import initialState from './initialState';

export function leads(state = initialState.leads, action) {
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      return {...state, leads: action.data.leads, meta: action.data.meta};
    case LOAD_LEADS_FAILURE:
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
      return {lead: {}};
    case RESET_LEAD:
      return {lead: {}};
    default:
      return state;
  }
}


