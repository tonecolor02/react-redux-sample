// IMPORT PACKAGE REFERENCES

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import {ZipCodeListItem} from './ZipCodeListItem';
import {DirectDriverListItem} from './ZipCodeListItem';


// COMPONENT

// const renderList = zipCodes => (
const renderList = directDriverList => (
    /*<div className="list-group animated fadeIn">
        {zipCodes.map(zipCode => renderListItem(zipCode))}
    </div>*/
    <div className="list-group animated fadeIn">
        {
            directDriverList.map(list => renderListItem(list))
        }
    </div>
);

/*
const renderListItem = zipCode => (
    <Fragment key={zipCode._id}>
        <ZipCodeListItem city={zipCode.city} state={zipCode.state} population={zipCode.pop} id={zipCode._id} />
    </Fragment>
);
*/

const renderListItem = directDriverList => (
    <Fragment>
        <DirectDriverListItem insurance={directDriverList.insurance} basic={directDriverList.basic}/>
    </Fragment>
);

const ZipCodeList = (props) => (
    <Fragment>
        {renderList(props.zipCodes)}
    </Fragment>
);

const DirectDriverList = (props) => (
    <Fragment>
        {renderList(props.directDriverList.list)}
    </Fragment>
);

ZipCodeList.propTypes = {
    zipCodes: PropTypes.array.isRequired
};
export {ZipCodeList};

DirectDriverList.propTypes = {
    directDriverList: PropTypes.array.isRequired
}
export {DirectDriverList};