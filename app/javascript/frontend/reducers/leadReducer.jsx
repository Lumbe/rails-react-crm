import {LOAD_LEAD, LOAD_LEADS_SUCCESS,LOAD_LEADS_FAILURE, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE, RESET_LEAD,
        CREATE_LEAD_REQUEST, CREATE_LEAD_SUCCESS, CREATE_LEAD_FAILURE} from '../actions/reduxApiMiddlware';
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


// TODO: add actions for UPDATE and CREATE lead(return updated and created lead)
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
    case CREATE_LEAD_REQUEST:
      console.log('create_lead_request: ', action);
      return {...state, lead: {}};
    case CREATE_LEAD_SUCCESS:
      console.log('create_lead_success: ', action);
      return action.payload;
    case CREATE_LEAD_FAILURE:
      console.log('create_lead_failure: ', action);
      return action.payload.lead;
    default:
      return state;
  }
}
