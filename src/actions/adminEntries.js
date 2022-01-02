import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { APPLICATION_APIS } from '../urls';
import {
    SET_ADMIN_PENDING_STATUS,
    IS_APPLICATION_STATUS_PENDING,
    PENDING_STATUS_API_ERROR
} from './adminEntriestypes';

export const setPendingStatus = () => {
    const URL = APPLICATION_APIS.applicationStatus;
    return dispatch => {
        dispatch(apiDispatch(IS_APPLICATION_STATUS_PENDING, true));
        apiClient
        .get(url)
        .then(res => {
            dispatch(apiDispatch(SET_ADMIN_PENDING_STATUS, res.data));
            dispatch(apiDispatch(IS_APPLICATION_STATUS_PENDING, false));
        })
        .catch(err => {
            dispatch(apiDispatch(SET_ADMIN_PENDING_STATUS, {}));
            dispatch(apiDispatch(IS_APPLICATION_STATUS_PENDING, true));
            dispatch(apiDispatch(PENDING_STATUS_API_ERROR, err.response));
        })
    }
}