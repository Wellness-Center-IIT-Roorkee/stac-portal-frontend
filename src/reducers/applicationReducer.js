import {
  SET_APPLICATIONS,
  GET_APPLICATIONS_API_ERROR,
  IS_GET_APPLICATIONS_PENDING,
  IS_CREATE_APPLICATION_PENDING,
  CREATE_APPLICATION_API_ERROR,
  SET_APPLICATION_DETAIL,
  GET_APPLICATION_DETAIL_API_ERROR,
  IS_GET_APPLICATION_DETAIL_PENDING,
  UPDATE_STATUS_API_ERROR,
  IS_UPDATE_STATUS_PENDING
} from '../actions/applicationActionTypes'

const initialErrorState = {
  getApplicationsError: null,
  getApplicationDetailError: null,
  createApplicationError: null,
  updateApplicationStatusError: null
}

const initialPendingState = {
  getApplicationsPending: null,
  getApplicationDetailPending: null,
  createApplicationPending: null,
  updateApplicationStatusPending: null
}

const initialState = {
  applications: [],
  applicationDetail: {},
  ...initialPendingState,
  ...initialErrorState
}

const applicationReducer = (state = initialState, action) => {
  const { type, payload, error } = action
  switch (type) {
    case IS_GET_APPLICATIONS_PENDING:
      return { ...state, getApplicationsPending: payload }
    case SET_APPLICATIONS:
      return { ...state, applications: payload }
    case GET_APPLICATIONS_API_ERROR:
      return { ...state, getApplicationsError: error }
    case IS_CREATE_APPLICATION_PENDING:
      return { ...state, createApplicationPending: payload }
    case CREATE_APPLICATION_API_ERROR:
      return { ...state, createApplicationError: error }
    case IS_GET_APPLICATION_DETAIL_PENDING:
      return { ...state, getApplicationDetailPending: payload }
    case SET_APPLICATION_DETAIL:
      return { ...state, applicationDetail: payload }
    case GET_APPLICATION_DETAIL_API_ERROR:
      return { ...state, getApplicationDetailError: error }
    case IS_UPDATE_STATUS_PENDING:
      return { ...state, updateApplicationStatusPending: payload }
    case UPDATE_STATUS_API_ERROR:
      return { ...state, updateApplicationStatusError: error }
    default:
      return state
  }
}

export default applicationReducer
