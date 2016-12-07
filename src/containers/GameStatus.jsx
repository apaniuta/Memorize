import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGameStatus } from '../selectors';

import Status from '../components/Status.jsx';

@connect(mapStateToProps)
export default class GameStatus extends Component {
    render() {
        const { status } = this.props;

        return <Status status={status} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getGameStatus(state)
    };
}