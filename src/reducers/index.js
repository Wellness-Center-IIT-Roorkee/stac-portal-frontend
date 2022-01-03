import { combineReducers } from 'redux';
import userReducer from './userReducer';
import recentApplicationReducer from './recentApplicationReducer'
import newApplicationReducer from './applicationFormReducer';

const appReducer = combineReducers({
  users: userReducer,
  recentApplications : recentApplicationReducer,
  newApplications: newApplicationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;