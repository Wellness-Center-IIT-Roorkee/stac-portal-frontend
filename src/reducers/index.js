import { combineReducers } from 'redux';
import userReducer from './userReducer';
import recentApplicationReducer from './recentApplicationReducer'

const appReducer = combineReducers({
  users: userReducer,
  recentApplications : recentApplicationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;