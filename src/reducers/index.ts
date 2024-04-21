import { combineReducers } from 'redux';
import { repositoryReducer, profileReducer } from './repositoriesReducer';

const rootReducer = combineReducers({
  repositoryReducer: repositoryReducer,
  profileReducer: profileReducer

});

export default rootReducer;
