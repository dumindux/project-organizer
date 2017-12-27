import projectsApi from '../api/mockProjectsApi';

export function loadProjectsSuccess(projects) {
  return { type: 'LOAD_PROJECTS_SUCCESS', projects };
}

export function updateSearchText(searchText) {
  return { type: 'UPDATE_SEARCH_TEXT', searchText };
}

export function setProjectSuccess(project) {
  return { type: 'SET_PROJECT', project };
}

export function showModal(show) {
  return { type: 'SHOW_MODAL', show };
}


export function setProject(key) {
  return function (dispatch) {
    return projectsApi.getProject(key)
      .then(project => {
        dispatch(setProjectSuccess(project));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadProjects() {
  return function (dispatch) {
    return projectsApi.getAllProjects()
      .then(projects => {
        dispatch(loadProjectsSuccess(projects));
      })
      .catch(error => {
        throw error;
      });
  };
}
