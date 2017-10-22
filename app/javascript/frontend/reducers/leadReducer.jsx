import {LOAD_LEADS_SUCCESS,LOAD_LEADS_FAILURE, LOAD_LEAD_SUCCESS, LOAD_LEAD_FAILURE, RESET_LEAD} from '../actions/leadActions';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export function leads(state = initialState.leads, action) {
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      return {...state, leads: action.data.leads, meta: action.data.meta};
    case LOAD_LEADS_FAILURE:
      return action.leads;
    default:
      return state;
  }
}

export function lead(state = initialState.lead, action) {
  switch(action.type) {
    case LOAD_LEAD_SUCCESS:
      return action.lead;
    case LOAD_LEAD_FAILURE:
      return action.lead;
    case RESET_LEAD:
      return action.lead;
    default:
      return state;
  }
}
