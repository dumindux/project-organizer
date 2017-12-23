import initialState from './initialState';

export default function authorReducer(state = initialState.projects, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS_SUCCESS':
      return action.projects;
    default:
      return state;
  }
}
