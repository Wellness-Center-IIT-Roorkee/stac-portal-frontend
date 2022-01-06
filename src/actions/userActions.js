import apiClient from '../helpers/apiClient'
import { apiDispatch } from '../helpers/helperFunctions'
import { USER_APIS } from '../urls'
import {
  IS_LOGIN_PENDING,
  SET_USER_DATA,
  SET_IS_LOGIN,
  GET_USER_DATA_PENDING,
  LOGGING_OUT_PENDING,
  USER_API_ERROR
} from './userActionTypes'
import { toastErrorMessage, toastSuccessMessage, toastInfoMessage, toastWarningMessage } from './toastActions'

export const login = (code, callback = () => {}) => {
  const url = USER_APIS.login
  return dispatch => {
    dispatch(apiDispatch(IS_LOGIN_PENDING, true))
    apiClient
      .post(url, { code: code })
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, res.data))
        dispatch(apiDispatch(SET_IS_LOGIN, true))
        console.log(res)
        callback(res.data)
        dispatch(toastSuccessMessage('Logged In Successfully'))
      })
      .catch(err => {
        if (err.response.data.error !== 'You are already logged in.') {
          dispatch(apiDispatch(SET_IS_LOGIN, true))
        } else {
          dispatch(apiDispatch(SET_USER_DATA, {}))
          dispatch(apiDispatch(SET_IS_LOGIN, false))
          dispatch(apiDispatch(USER_API_ERROR, err.response))
          dispatch(toastErrorMessage('Some Error occured in Logging In'))
        }
      })
      .finally(() => {
        dispatch(apiDispatch(IS_LOGIN_PENDING, false))
      })
  }
}

export const getInfo = () => {
  const url = USER_APIS.whoAmI
  return dispatch => {
    dispatch(apiDispatch(GET_USER_DATA_PENDING, true))
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, res.data))
        dispatch(apiDispatch(SET_IS_LOGIN, true))
      })
      .catch(err => {
        dispatch(apiDispatch(SET_USER_DATA, {}))
        dispatch(apiDispatch(SET_IS_LOGIN, false))
        dispatch(apiDispatch(USER_API_ERROR, err.response))
      })
      .finally(() => {
        dispatch(apiDispatch(GET_USER_DATA_PENDING, false))
      })
  }
}

export const logOut = () => {
  const url = USER_APIS.logout
  return dispatch => {
    dispatch(apiDispatch(LOGGING_OUT_PENDING, true))
    apiClient
      .post(url)
      .then(res => {
        dispatch(apiDispatch(SET_IS_LOGIN, false))
        dispatch(apiDispatch(SET_USER_DATA, {}))
        dispatch(toastSuccessMessage('Logged Out Successfully'))
      })
      .catch(err => {
        dispatch(apiDispatch(USER_API_ERROR, err.response))
        dispatch(toastErrorMessage('Some Error occured in Logging Out'))
      })
      .finally(() => {
        dispatch(apiDispatch(LOGGING_OUT_PENDING, false))
      })
  }
}
