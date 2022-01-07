import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { APPLICATION_APIS } from '../urls';
import {
    SET_NEW_APPLICATION_DATA,
    NEW_APPLICATION_API_ERROR,
    IS_NEW_APPLICATION_DATA_PENDING,
} from './applicationFormActionTypes'

export const setNewAppData = (formData) => {
    const url = APPLICATION_APIS.newApplication;
    return dispatch => {
      dispatch(apiDispatch(IS_NEW_APPLICATION_DATA_PENDING, true));
      apiClient
        .post(url,formData)
        .then(res => {
          dispatch(apiDispatch(IS_NEW_APPLICATION_DATA_PENDING, false));
          console.log('success');
        })
        .catch(err => {
          dispatch(apiDispatch(NEW_APPLICATION_API_ERROR, err.response));
          dispatch(apiDispatch(IS_NEW_APPLICATION_DATA_PENDING, false));
          console.log('error');
        });
    };
  };