import projectsApi from '../api/mockProjectsApi';

export function loadProjectsSuccess(projects) {
  return { type: 'LOAD_PROJECTS_SUCCESS', projects };
}

export function updateSearchText(searchText) {
  return { type: 'UPDATE_SEARCH_TEXT', searchText };
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
