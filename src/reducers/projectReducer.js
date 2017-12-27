import initialState from './initialState';

export default function projectReducer(state = initialState.project, action) {
  switch (action.type) {
    case 'SET_PROJECT':
      return {
        project: Object.assign({}, action.project),
        show: state.show
      };
    case 'SHOW_MODAL':
      if(!action.show){
        return {
          project: null,
          show: action.show
        };
      } else {
        return {
          project: state.project,
          show: action.show
        };
      }

    default:
      return state;
  }
}
