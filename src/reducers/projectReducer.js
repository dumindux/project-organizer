import initialState from './initialState';

export default function projectReducer(state = initialState.project, action) {
  switch (action.type) {
    case 'SET_PROJECT':
      return Object.assign({}, action.project);
    default:
      return state;
  }
}
