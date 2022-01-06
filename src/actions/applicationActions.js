import apiClient from '../helpers/apiClient'
import { apiDispatch } from '../helpers/helperFunctions'
import { APPLICATION_APIS } from '../urls'
import {
  SET_APPLICATIONS,
  GET_APPLICATIONS_API_ERROR,
  IS_GET_APPLICATIONS_PENDING,
  IS_CREATE_APPLICATION_PENDING,
  CREATE_APPLICATION_API_ERROR,
  SET_APPLICATION_DETAIL,
  GET_APPLICATION_DETAIL_API_ERROR,
  IS_GET_APPLICATION_DETAIL_PENDING,
  UPDATE_APPLICATION_API_ERROR,
  IS_UPDATE_APPLICATION_PENDING,
  UPDATE_STATUS_API_ERROR,
  IS_UPDATE_STATUS_PENDING
} from './applicationActionTypes'
import { toastErrorMessage, toastSuccessMessage, toastInfoMessage, toastWarningMessage } from './toastActions'

export const getApplications = () => {
  const url = APPLICATION_APIS.application
  return dispatch => {
    dispatch(apiDispatch(IS_GET_APPLICATIONS_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_APPLICATIONS, res.data))
      })
      .catch(err => {
        dispatch(apiDispatch(SET_APPLICATIONS, []))
        dispatch(apiDispatch(GET_APPLICATIONS_API_ERROR, err.response))
      })
      .finally(() => {
        dispatch(apiDispatch(IS_GET_APPLICATIONS_PENDING, false))
      })
  }
}

export const createApplication = (formData, call) => {
  const url = APPLICATION_APIS.application
  return dispatch => {
    dispatch(apiDispatch(IS_CREATE_APPLICATION_PENDING, true))
    apiClient
      .post(url, formData)
      .catch(err => {
        dispatch(apiDispatch(CREATE_APPLICATION_API_ERROR, err.response))
        dispatch(toastErrorMessage('Some Error occured in Creating Application'))
      })
      .finally(() => {
        dispatch(apiDispatch(IS_CREATE_APPLICATION_PENDING, false))
        dispatch(toastSuccessMessage('Application Created Successfully'))
        setTimeout(() => {
          call();
        }, 1000);
      })
  }
}

export const getApplicationDetail = (
  id,
  successCallback = () => {},
  failureCallback = () => {}
) => {
  const url = `${APPLICATION_APIS.application}${id}/`
  return dispatch => {
    dispatch(apiDispatch(IS_GET_APPLICATION_DETAIL_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_APPLICATION_DETAIL, res.data))
        successCallback()
      })
      .catch(err => {
        dispatch(apiDispatch(SET_APPLICATION_DETAIL, {}))
        dispatch(apiDispatch(GET_APPLICATION_DETAIL_API_ERROR, err.response))
        failureCallback()
      })
      .finally(() => {
        dispatch(apiDispatch(IS_GET_APPLICATION_DETAIL_PENDING, false))
      })
  }
}

export const updateApplication = ({ id, formData: payload, call }) => {
  const url = `${APPLICATION_APIS.application}${id}/`
  return dispatch => {
    dispatch(apiDispatch(IS_UPDATE_APPLICATION_PENDING, true))
    apiClient
      .patch(url, payload)
      .catch(err => {
        dispatch(apiDispatch(UPDATE_APPLICATION_API_ERROR, err.response))
        dispatch(toastErrorMessage('Some Error occured in Updating Application'))
      })
      .finally(() => {
        dispatch(apiDispatch(IS_UPDATE_APPLICATION_PENDING, false))
        dispatch(toastSuccessMessage('Application Updated Successfully'))
        setTimeout(() => {
          call();
        }, 1000);
      })
  }
}

export const updateApplicationStatus = ({ id, ...payload }) => {
  const url = `${APPLICATION_APIS.application}${id}/change_status/`
  return dispatch => {
    dispatch(apiDispatch(IS_UPDATE_STATUS_PENDING, true))
    apiClient
      .post(url, payload)
      .then(() => {
        dispatch(getApplications())
      })
      .catch(err => {
        dispatch(apiDispatch(UPDATE_STATUS_API_ERROR, err.response))
        dispatch(toastErrorMessage('Some Error occured in Updating Status'))
      })
      .finally(() => {
        dispatch(apiDispatch(IS_UPDATE_STATUS_PENDING, false))
        dispatch(toastSuccessMessage('Status Updated Successfully'))
      })
  }
}
