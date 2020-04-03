import {fetchDirectDriverList} from '../../../services/DirectDriverService';

export const FETCH_DIRECT_DRIVER = 'FETCH_DIRECT_DRIVER';
export const FETCH_DIRECT_DRIVER_PENDING = 'FETCH_DIRECT_DRIVER_PENDING';
export const FETCH_DIRECT_DRIVER_FULFILLED = 'FETCH_DIRECT_DRIVER_FULFILLED';
export const FETCH_DIRECT_DRIVER_REJECTED = 'FETCH_DIRECT_DRIVER_REJECTED';

const fetchDirectDriverAction = () => ({
    type: FETCH_DIRECT_DRIVER,
    payload: fetchDirectDriverList()
});

export { fetchDirectDriverAction as fetchDirectDriver };
