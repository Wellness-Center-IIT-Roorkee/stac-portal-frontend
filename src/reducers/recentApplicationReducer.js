import {
  SET_RECENT_APPLICATION_DATA,
  RECENT_APPLICATION_API_ERROR,
  IS_RECENT_APPLICATION_DATA_PENDING,
} from '../actions/recentApplicationActionsTypes'

const initialState = {
    applicationData: {},
    isRecentApplicationDataPending: false,
    error: {},
  };

const recentApplicationReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      case IS_RECENT_APPLICATION_DATA_PENDING:
        return { ...state, isRecentApplicationDataPending: payload };
      case SET_RECENT_APPLICATION_DATA:
        return { ...state, applicationData: payload };
      case RECENT_APPLICATION_API_ERROR:
        return { ...state, error: error };
      default:
        return state;
    }    
}

export default recentApplicationReducer
