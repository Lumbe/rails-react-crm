import {
  LOAD_LEADS_SUCCESS,
  CREATE_LEAD_SUCCESS,
  DELETE_LEAD_SUCCESS
} from '../actions/leadActions';
import initialState from './initialState';
import {denormalize} from 'normalizr'
import {leadSchema, leadListSchema} from "../api/schema";
import {cloneDeep} from 'lodash'


export function leads(state = initialState.leads, action) {
  let newState = null;
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      newState = cloneDeep(state);
      newState.data = action.result;
      newState.meta = action.meta;
      return newState;
    case CREATE_LEAD_SUCCESS:
      newState = cloneDeep(state);
      newState.data = [action.result, ...newState.data];
      return newState;
    case DELETE_LEAD_SUCCESS:
      newState = cloneDeep(state);
      newState.data = newState.data.filter((id) => {return id !== action.id});
      return newState;
    default:
      return state;
  }
}

export function getLeads(state) {
  let leads = denormalize(state.leads.data || [], leadListSchema, state.entities);
  const meta = state.leads.meta;
  return {
    leads,
    meta
  }
}

export function getLead(state, id) {
  let lead = denormalize(id, leadSchema, state.entities);
  return {
    lead
  }
}