import React from 'react';
import PropTypes from 'prop-types';

const DirectDriverListItem = ({insurance, basic}) => (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">basic</h5>
            <small className="text-muted">{insurance}</small>
        </div>
        <small className="text-muted">{basic}</small>
    </a>
);

DirectDriverListItem.prototype = {
    insurance: PropTypes.string.isRequired,
    basic: PropTypes.string.isRequired,
};

export {DirectDriverListItem};