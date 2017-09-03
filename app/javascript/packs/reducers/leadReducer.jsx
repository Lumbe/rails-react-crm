import {LOAD_LEADS_SUCCESS, LOAD_LEAD_SUCCESS, RESET_LEAD} from '../actions/leadActions';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export function leads(state = initialState.leads, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case LOAD_LEADS_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
      return action.leads
    // case types.LOAD_LEAD_SUCCESS:
    //   state = initialState.lead
    //   return Object.assign({}, action.lead)
    // case types.CREATE_CAT_SUCCESS:
    //   browserHistory.push(`/cats/${action.cat.id}`)
    //   return [
    //     ...state.filter(cat => cat.id !== action.cat.id),
    //     Object.assign({}, action.cat)
    //   ]
    // case types.UPDATE_CAT_SUCCESS:
    //   return [
    //     ...state.filter(cat => cat.id !== action.cat.id),
    //     Object.assign({}, action.cat)
    //   ]
    // case types.DELETE_CAT_SUCCESS: {
    //   const newState = Object.assign([], state);
    //   const indexOfCatToDelete = state.findIndex(cat => {return cat.id == action.cat.id})
    //   newState.splice(indexOfCatToDelete, 1);
    //   browserHistory.push('/cats');
    //   return newState;
    // }
    default:
      return state;
  }
}

export function lead(state = initialState.lead, action) {
  switch(action.type) {
    case LOAD_LEAD_SUCCESS:
      return action.lead
    case RESET_LEAD:
      return action.lead
    default:
      return state;
  }
}
