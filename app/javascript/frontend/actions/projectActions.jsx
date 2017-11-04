import projectApi from '../api/projectApi';
import * as notificationActions from './notificationActions'
// Action types
// export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
// export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';

//Project list
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';

//Create new project
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';

// Update project
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';

//Validate project fields like Name, Phone on the server
export const VALIDATE_PROJECT_FIELDS = 'VALIDATE_PROJECT_FIELDS';
export const VALIDATE_PROJECT_FIELDS_SUCCESS = 'VALIDATE_PROJECT_FIELDS_SUCCESS';
export const VALIDATE_PROJECT_FIELDS_FAILURE = 'VALIDATE_PROJECT_FIELDS_FAILURE';

//Load project
export const LOAD_PROJECT = 'LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_FAILURE = 'LOAD_PROJECT_FAILURE';
export const RESET_PROJECT = 'RESET_PROJECT';

//Delete project
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';




// Actions
//Project list
export function loadProjectsSuccess(data) {
  return {type: LOAD_PROJECTS_SUCCESS, data};
}
export function loadProjectsFailure() {
  return {type: LOAD_PROJECTS_FAILURE, projects: []}
}
export function createProjectSuccess(project) {
  return {type: CREATE_PROJECT_SUCCESS, project}
}
export function loadProjectSuccess(project) {
  return {type: LOAD_PROJECT_SUCCESS, project};
}
export function loadProjectFailure() {
  return {type: LOAD_PROJECT_SUCCESS, project: {}};
}
export function updateProjectSuccess(project) {
  return {type: UPDATE_PROJECT_SUCCESS, project}
}
export function deleteProjectSuccess(project) {
  return {type: DELETE_PROJECT_SUCCESS, project}
}

export function resetProjectSuccess() {
  return {type: RESET_PROJECT}
}


// Dispatch actions and send to reducers with redux-thunk
export function loadProjects(params = null) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return projectApi.getAll(params).then(
      response => {
        dispatch(loadProjectsSuccess(response.data));
        },
      error => {
        projectApi.catchError(error);
        dispatch(loadProjectsFailure());
    })
  }
}

export function loadProject(project_id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return projectApi.getOne(project_id).then(
      response => {
        dispatch(loadProjectSuccess(response.data.project));
      },
      error => {
        projectApi.catchError(error);
        dispatch(loadProjectFailure());
      }
    )
  };
}

export function createProject(project) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return projectApi.create(project).then(
      response => {
        dispatch(createProjectSuccess(response.data.project));
        return response;
      },
      error => {
        projectApi.catchError(error);
        // dispatch(createProjectFailure());
      }
    )
  };
}

export function updateProject(id, data) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return projectApi.update(id, data).then(
      response => {
        dispatch(updateProjectSuccess(response.data.project));
        return response;
      },
      error => {
        projectApi.catchError(error);
        // dispatch(createProjectFailure());
      }
    )
  };
}

export function destroyProject(project) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return projectApi.destroy(project).then(
      response => {
        dispatch(updateProjectSuccess(response.data.project));
        return response;
      },
      error => {
        projectApi.catchError(error);
        // dispatch(createProjectFailure());
      }
    )
  };
}

export function resetProject() {
  return function(dispatch) {
    dispatch(resetProjectSuccess());
  };
}
