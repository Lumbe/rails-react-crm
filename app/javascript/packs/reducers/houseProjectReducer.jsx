import {LOAD_HOUSE_PROJECTS_SUCCESS, LOAD_HOUSE_PROJECT_SUCCESS, RESET_HOUSE_PROJECT} from '../actions/houseProjectActions';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export function houseProjects(state = initialState.houseProjects, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case LOAD_HOUSE_PROJECTS_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
      return action.houseProjects
    // case types.LOAD_HOUSE_PROJECT_SUCCESS:
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

export function houseProject(state = initialState.houseProject, action) {
  switch(action.type) {
    case LOAD_HOUSE_PROJECT_SUCCESS:
      return action.houseProject
    case RESET_HOUSE_PROJECT:
      return action.houseProject
    default:
      return state;
  }
}
