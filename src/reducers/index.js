import {combineReducers} from 'redux';
import projects from'./projectsReducer';
import searchText from'./searchTextReducer';

const rootReducer = combineReducers({
  projects,
  searchText
});

export default rootReducer;
