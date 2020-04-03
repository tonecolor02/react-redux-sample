import {
    FETCH_DIRECT_DRIVER_PENDING,
    FETCH_DIRECT_DRIVER_FULFILLED,
    FETCH_DIRECT_DRIVER_REJECTED,
} from '../actions/DirectDriverActions';

const initialState = {
    directDriverList: {},
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchDirectDriverReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_DIRECT_DRIVER_PENDING :
            return {
                ...state,
                directDriverList: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_DIRECT_DRIVER_FULFILLED:
            return {
                ...state,
                directDriverList: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_DIRECT_DRIVER_REJECTED:
            return {
                ...state,
                directDriverList: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};