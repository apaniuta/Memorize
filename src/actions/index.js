export const START_GAME = 'START_GAME';
export const REVEAL_TILE = 'REVEAL_TILE';
export const CLOSE_TILES = 'CLOSE_TILES';

export const startGame = () => ({
    type: START_GAME,
    cols: 4,
    rows: 4,
});

export const revealTile = tileId => ({
    type: REVEAL_TILE,
    tileId
});

export const closeTiles = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: CLOSE_TILES });
    }, 1000);
};