import initialState from './initialState';
import {DELETE_LEAD_SUCCESS} from "../actions/leadActions";
import {cloneDeep} from 'lodash'

export function entities(state = initialState.entities, action) {
  let newState = null;
  if (action.entities) {
    newState = cloneDeep(state);
    let entities = action.entities;
    for (let key in entities) {
      if (entities.hasOwnProperty(key)) {
        if (newState[key]) {
          let newEntities = {...newState[key], ...entities[key]};
          newState = {...newState, [key]: newEntities};
        } else {
          newState = {...newState, [key]: entities[key]}
        }
      }
    }
    return newState;
  }
  switch(action.type) {
    case DELETE_LEAD_SUCCESS:
      newState = cloneDeep(state);
      delete newState.leads[action.id];
      return newState;
    default:
      return state;
  }
}