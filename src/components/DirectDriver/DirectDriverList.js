import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {DirectDriverListItem} from './DirectDriverListItem';

const renderList = directDriverList => (
    <div className="list-group animated fadeIn">
        {
            directDriverList.map(list => renderListItem(list))
        }
    </div>
);

const renderListItem = directDriverList => (
    <Fragment>
        <DirectDriverListItem insurance={directDriverList.insurance} basic={directDriverList.basic}/>
    </Fragment>
);

const DirectDriverList = (props) => (
    <Fragment>
        {renderList(props.directDriverList.list)}
    </Fragment>
);

DirectDriverList.propTypes = {
    directDriverList: PropTypes.array.isRequired
}

export {DirectDriverList};
