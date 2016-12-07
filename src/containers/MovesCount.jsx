import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovesCount } from '../selectors';

import GameStatItem from '../components/GameStatItem.jsx';

@connect(mapStateToProps)
export default class MovesCount extends Component {
    render() {
        const { moves } = this.props;

        return <GameStatItem stat={moves} label="Moves" />;
    }
}

function mapStateToProps(state) {
    return {
        moves: getMovesCount(state)
    };
}