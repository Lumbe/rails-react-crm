import {
  LOAD_LEADS_SUCCESS,
  LOAD_LEADS_FAILURE,
  LOAD_LEAD_SUCCESS,
  LOAD_LEAD_FAILURE,
  CREATE_LEAD_SUCCESS,
  CREATE_LEAD_FAILURE,
  UPDATE_LEAD_SUCCESS,
  UPDATE_LEAD_FAILURE,
  DELETE_LEAD_SUCCESS
} from '../actions/leadActions';
import initialState from './initialState';
import {denormalize} from 'normalizr'
import {leadSchema, leadListSchema} from "../api/schema";


export function leads(state = initialState.leads, action) {
  let newState = null;
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      newState = state;
      newState.data = [...action.result];
      newState.meta = action.meta;
      return newState;
    case CREATE_LEAD_SUCCESS:
      newState = state;
      newState.data = [action.result, ...newState.data];
      return newState;
    // case UPDATE_LEAD_SUCCESS:
    //   newState = state;
    //   console.log('update action', action);
    //   return newState;
    case DELETE_LEAD_SUCCESS:
      newState = state;
      newState.data = newState.data.filter((id) => {return id !== action.id});
      return newState;
    default:
      return state;
  }
}

export function getLeads(state) {
  let leads = denormalize(state.leads.data || [], leadListSchema, state.entities);
  return {
    leads: leads,
    meta: state.leads.meta
  }
}

export function getLead(state, id) {
  let lead = denormalize(state.entities.leads[id], leadSchema, state.entities);
  return {
    lead: lead || null
  }
}