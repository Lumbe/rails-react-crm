import initialState from './initialState';
import {DELETE_LEAD_SUCCESS} from "../actions/leadActions";

export function entities(state = initialState.entities, action) {
  if (action.entities) {
    let newState = state;
    let entities = action.entities;
    for (let key in entities) {
      if (entities.hasOwnProperty(key)) {
        if (state[key]) {
          let newEntities = {...state[key], ...entities[key]};
          newState = {...newState, [key]: newEntities};
        } else {
          newState = {...newState, [key]: entities[key]}
        }
      }
    }
    return newState;
  }
  let newState = null;
  switch(action.type) {
    case DELETE_LEAD_SUCCESS:
      newState = state;
      delete newState.leads[action.id];
      return newState;
    default:
      return state;
  }
}