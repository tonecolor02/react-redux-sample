import { fetchZipCodes } from '../../../services/ZipCodeService';
import { fetchDirectDriverList } from '../../../services/ZipCodeService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_ZIPCODES = 'FETCH_ZIPCODES';
export const FETCH_ZIPCODES_PENDING = 'FETCH_ZIPCODES_PENDING';
export const FETCH_ZIPCODES_FULFILLED = 'FETCH_ZIPCODES_FULFILLED';
export const FETCH_ZIPCODES_REJECTED = 'FETCH_ZIPCODES_REJECTED';

export const FETCH_DIRECT_DRIVER = 'FETCH_DIRECT_DRIVER';
export const FETCH_DIRECT_DRIVER_PENDING = 'FETCH_DIRECT_DRIVER_PENDING';
export const FETCH_DIRECT_DRIVER_FULFILLED = 'FETCH_DIRECT_DRIVER_FULFILLED';
export const FETCH_DIRECT_DRIVER_REJECTED = 'FETCH_DIRECT_DRIVER_REJECTED';


// ACTION GENERATORS

const fetchZipCodesAction = () => ({
    type: FETCH_ZIPCODES,
    payload: fetchZipCodes()
});

const fetchDirectDriverAction = () => ({
    type: FETCH_DIRECT_DRIVER,
    payload: fetchDirectDriverList()
});

// EXPORT ACTIONS

export { fetchZipCodesAction as fetchZipCodes };
export { fetchDirectDriverAction as fetchDirectDriver };
