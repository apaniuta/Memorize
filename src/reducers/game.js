import { fromJS } from 'immutable';

import { startGame, revealTile, closeSavedTiles } from '../utils';

import {
    START_GAME,
    REVEAL_TILE,
    CLOSE_TILES,
} from '../actions';

const DEFAULT_STATE = fromJS({
    board: [],
    cols: 4,
    rows: 4,
    moves: 0,
    savedTiles: []
});

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case START_GAME: {
            const { rows, cols } = action;

            return startGame({ rows, cols });
        }

        case REVEAL_TILE: {
            return revealTile(state, action.tileId);
        }

        case CLOSE_TILES: {
            return closeSavedTiles(state);
        }

        default: {
            return state;
        }
    }
};