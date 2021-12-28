import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { APPLICATION_APIS } from '../urls';
import {
    SET_RECENT_APPLICATION_DATA,
    RECENT_APPLICATION_API_ERROR,
    IS_RECENT_APPLICATION_DATA_PENDING,
} from './recentApplicationActionsTypes'

export const getRecentAppData = () => {
    const url = APPLICATION_APIS.recentApplication;
    return dispatch => {
      dispatch(apiDispatch(IS_RECENT_APPLICATION_DATA_PENDING, true));
      apiClient
        .get(url)
        .then(res => {
          dispatch(apiDispatch(SET_RECENT_APPLICATION_DATA, res.data));
          dispatch(apiDispatch(IS_RECENT_APPLICATION_DATA_PENDING, false));
        })
        .catch(err => {
          dispatch(apiDispatch(SET_RECENT_APPLICATION_DATA, {}));
          dispatch(apiDispatch(RECENT_APPLICATION_API_ERROR, err.response));
          dispatch(apiDispatch(IS_RECENT_APPLICATION_DATA_PENDING, true));
        });
    };
  };