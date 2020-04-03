import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDirectDriver} from '../state/actions/DirectDriverActions';
import {DirectDriverList} from './DirectDriverList';
import {LoadingIndicator} from '../shared/LoadingIndicator/LoadingIndicator';
import {Error} from '../shared/Error/Error';

class DirectDriver extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDirectDriver();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <DirectDriverList directDriverList={this.props.directDriverList}/>
                }
                {
                    <LoadingIndicator busy={this.props.fetching}/>
                }
                {
                    this.props.failed && <Error message="Failed"/>
                }
            </div>
        );
    }
}

DirectDriver.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,

    fetchDirectDriver: PropTypes.func.isRequired,
    directDriverList: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const {fetching, fetched, failed, directDriverList} = state.directDriverList;
    return {fetching, fetched, failed, directDriverList};
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({fetchDirectDriver}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(DirectDriver);

export {hoc as DirectDriver};