import {LOAD_LEAD, LOAD_LEADS_SUCCESS,LOAD_LEADS_FAILURE, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE, RESET_LEAD} from '../actions/reduxApiMiddlware';
// import {LOAD_LEADS_SUCCESS,LOAD_LEADS_FAILURE, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE, RESET_LEAD} from '../actions/leadActions';
import initialState from './initialState';

export function leads(state = initialState.leads, action) {
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      return {...state, leads: action.payload.leads, meta: action.payload.meta};
    case LOAD_LEADS_FAILURE:
      return action.payload.leads;
    default:
      return state;
  }
}

export function lead(state = initialState.lead, action) {
  switch(action.type) {
    case LOAD_LEAD:
      return {...state, lead: {}};
    case LOAD_LEAD_SUCCESS:
      console.log('load_lead_success: ', action);
      return action.payload.lead;
    case LOAD_LEAD_FAILURE:
      return action.payload.lead;
    case RESET_LEAD:
      return action.lead;
    default:
      return state;
  }
}
