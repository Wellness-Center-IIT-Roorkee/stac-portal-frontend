import { combineReducers } from 'redux';
import userReducer from './userReducer';
import applicationReducer from './applicationReducer'
import toastReducer from './toastReducer'

const appReducer = combineReducers({
  user: userReducer,
  application : applicationReducer,
  toast: toastReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;