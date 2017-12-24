import initialState from './initialState';

export default function searchTextReducer(state = initialState.searchText, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}
