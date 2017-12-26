import {combineReducers} from 'redux';
import projects from'./projectsReducer';
import searchText from'./searchTextReducer';
import project from'./projectReducer';

const rootReducer = combineReducers({
  projects,
  searchText,
  project
});

export default rootReducer;
