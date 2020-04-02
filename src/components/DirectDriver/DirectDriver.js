// IMPORT PACKAGE REFERENCES
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// IMPORT PROJECT REFERENCES

import {fetchZipCodes} from '../state/actions/ZipCodeActions';
import {fetchDirectDriver} from "../state/actions/ZipCodeActions";
// import { ZipCodeList } from './ZipCodeList';
import {DirectDriverList, ZipCodeList} from './ZipCodeList';
import {LoadingIndicator} from '../shared/LoadingIndicator/LoadingIndicator';
import {Error} from '../shared/Error/Error';


// COMPONENT

class DirectDriver extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectDriver();
        // this.props.fetchZipCodes();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <DirectDriverList directDriverList={this.props.directDriverList}/>
                    // this.props.fetched && <ZipCodeList zipCodes={this.props.zipCodes} />
                    // this.props.fetched && <DirectDriverList directDriverList={this.props.directDriverList}/>
                }
                {
                    <LoadingIndicator busy={this.props.fetching}/>
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of zip codes"/>
                }
            </div>
        );
    }
}

DirectDriver.propTypes = {
    // fetchZipCodes: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    // zipCodes: PropTypes.array.isRequired,

    fetchDirectDriver: PropTypes.func.isRequired,
    directDriverList: PropTypes.object.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    // const { fetching, fetched, failed, zipCodes } = state.zipCodes;

    console.log('mapStateToProps')
    console.log(state)
    const {fetching, fetched, failed, directDriverList} = state.directDriverList;

    return {fetching, fetched, failed, directDriverList};
};

const mapDispatchToProps = dispatch => (
    // bindActionCreators({ fetchZipCodes }, dispatch)
    bindActionCreators({fetchDirectDriver}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(DirectDriver);


// EXPORT COMPONENT

export {hoc as DirectDriver};