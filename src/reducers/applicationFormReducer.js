import {
    SET_NEW_APPLICATION_DATA,
    NEW_APPLICATION_API_ERROR,
    IS_NEW_APPLICATION_DATA_PENDING,
} from '../actions/applicationFormActionTypes'

const initialState = {
    newApplicationData: {},
    isNewApplicationDataPending: false,
    error: {},
  };

const newApplicationReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
      case IS_NEW_APPLICATION_DATA_PENDING:
        return { ...state, isNewApplicationDataPending: payload };
      case SET_NEW_APPLICATION_DATA:
        return { ...state, newApplicationData: payload };
      case NEW_APPLICATION_API_ERROR:
        return { ...state, error: error };
      default:
        return state;
    }    
}

export default newApplicationReducer