import { combineReducers } from 'redux';
import userReducer from './userReducer';
import applicationReducer from './applicationReducer'

const appReducer = combineReducers({
  user: userReducer,
  application : applicationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;