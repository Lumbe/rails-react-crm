import {LOAD_PROJECTS_SUCCESS,LOAD_PROJECTS_FAILURE, LOAD_PROJECT_SUCCESS, LOAD_PROJECT_FAILURE, RESET_PROJECT} from '../actions/projectActions';
import initialState from './initialState';

export function projects(state = initialState.projects, action) {
  switch(action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return {...state, projects: action.data.projects, meta: action.data.meta};
    case LOAD_PROJECTS_FAILURE:
      return action.projects;
    default:
      return state;
  }
}

export function project(state = initialState.project, action) {
  switch(action.type) {
    case LOAD_PROJECT_SUCCESS:
      return action.project;
    case LOAD_PROJECT_FAILURE:
      return action.project;
    case RESET_PROJECT:
      return initialState.project;
    default:
      return state;
  }
}
