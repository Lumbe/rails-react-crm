import houseProjectApi from '../api/houseProjectApi';

//House Project list
export const LOAD_HOUSE_PROJECTS = 'LOAD_HOUSE_PROJECTS';
export const LOAD_HOUSE_PROJECTS_SUCCESS = 'LOAD_HOUSE_PROJECTS_SUCCESS';
export const LOAD_HOUSE_PROJECTS_FAILURE = 'LOAD_HOUSE_PROJECTS_FAILURE';

//Create new houseProject
export const CREATE_HOUSE_PROJECT = 'CREATE_HOUSE_PROJECT';
export const CREATE_HOUSE_PROJECT_SUCCESS = 'CREATE_HOUSE_PROJECT_SUCCESS';
export const CREATE_HOUSE_PROJECT_FAILURE = 'CREATE_HOUSE_PROJECT_FAILURE';

//Validate houseProject fields like Name, Phone on the server
export const VALIDATE_HOUSE_PROJECT_FIELDS = 'VALIDATE_HOUSE_PROJECT_FIELDS';
export const VALIDATE_HOUSE_PROJECT_FIELDS_SUCCESS = 'VALIDATE_HOUSE_PROJECT_FIELDS_SUCCESS';
export const VALIDATE_HOUSE_PROJECT_FIELDS_FAILURE = 'VALIDATE_HOUSE_PROJECT_FIELDS_FAILURE';

//Load houseProject
export const LOAD_HOUSE_PROJECT = 'LOAD_HOUSE_PROJECT';
export const LOAD_HOUSE_PROJECT_SUCCESS = 'LOAD_HOUSE_PROJECT_SUCCESS';
export const LOAD_HOUSE_PROJECT_FAILURE = 'LOAD_HOUSE_PROJECT_FAILURE';
export const RESET_HOUSE_PROJECT = 'RESET_HOUSE_PROJECT'

//Delete houseProject
export const DELETE_HOUSE_PROJECT = 'DELETE_HOUSE_PROJECT';
export const DELETE_HOUSE_PROJECT_SUCCESS = 'DELETE_HOUSE_PROJECT_SUCCESS';
export const DELETE_HOUSE_PROJECT_FAILURE = 'DELETE_HOUSE_PROJECT_FAILURE';




// Actions
export function loadHouseProjectsSuccess(houseProjects) {
  return {type: LOAD_HOUSE_PROJECTS_SUCCESS, houseProjects};
}
export function createHouseProjectSuccess(houseProject) {
  return {type: CREATE_HOUSE_PROJECT_SUCCESS, houseProject}
}
export function loadHouseProjectSuccess(houseProject) {
  return {type: LOAD_HOUSE_PROJECT_SUCCESS, houseProject};
}
export function updateHouseProjectSuccess(houseProject) {
  return {type: UPDATE_HOUSE_PROJECT_SUCCESS, houseProject}
}
export function deleteHouseProjectSuccess(houseProject) {
  return {type: DELETE_HOUSE_PROJECT_SUCCESS, houseProject}
}

export function resetHouseProjectSuccess() {
  return {type: RESET_HOUSE_PROJECT, houseProject: {}}
}


// Dispatch actions and send to reducers with redux-thunk
export function loadHouseProjects() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return houseProjectApi.getAll().then(response => {
      dispatch(loadHouseProjectsSuccess(response.data.house_projects));
    })
  };
}

export function loadHouseProject(houseProjectId) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return houseProjectApi.getOne(houseProjectId).then(response => {
      dispatch(loadHouseProjectSuccess(response.data.house_project));
    })
  };
}

export function resetHouseProject() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(resetHouseProjectSuccess());
  };
}
