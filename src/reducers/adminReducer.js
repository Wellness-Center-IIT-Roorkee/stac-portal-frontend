import { SET_ADMIN_PENDING_STATUS,
    IS_APPLICATION_STATUS_PENDING,
    PENDING_STATUS_API_ERROR 
    } from "../actions/adminEntriestypes";
    
    const initialState = {
        isPending: true,
        pendingStatus: pen,
        error: {}
    };
    
    const adminReducer = (state = initialState, action) => {
        const { type, payload, error } = action;
        switch(type) {
            case SET_ADMIN_PENDING_STATUS:
                return { ...state, pendingStatus: payload};
            case IS_APPLICATION_STATUS_PENDING:
                return { ...state, isPending: payload};
            case PENDING_STATUS_API_ERROR:
                return { ...state, error: error };
            default:
                return state;
        }
    }
    