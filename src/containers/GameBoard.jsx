import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGameBoard } from '../selectors';

import * as actions from '../actions';

import Board from '../components/Board.jsx';

@connect(
    mapStateToProps,
    actions
)
export default class GameBoard extends Component {
    render() {
        const { rows, revealTile, toggleFlaggedTile } = this.props;

        return (
            <Board
                rows={rows}
                onReveal={revealTile}
                onToggleFlagged={toggleFlaggedTile}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        rows: getGameBoard(state)
    };
}