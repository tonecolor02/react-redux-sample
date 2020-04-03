// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchDirectDriverReducer } from './FetchDirectDriverReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchDirectDriverReducer,
    directDriverList: FetchDirectDriverReducer
});