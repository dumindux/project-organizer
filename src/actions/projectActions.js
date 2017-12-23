import projectsApi from '../api/mockProjectsApi';

export function loadProjectsSuccess(projects) {
  return { type: 'LOAD_PROJECTS_SUCCESS', projects };
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
