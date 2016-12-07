import { List } from 'immutable';

export const WINNER = 'You Win !';
export const PLAYING = 'Playing';

export const getGameBoard = (state) => {
    const board = state.getIn(['game', 'board']);
    const cols = state.getIn(['game', 'cols']);

    return board.reduce((rows, cell) => {
        const rowIdx = Math.floor(cell.get('id') / cols);
        const row = rows.get(rowIdx);

        return row
            ? rows.set(rowIdx, row.push(cell))
            : rows.push(new List([cell]));
    }, new List());
};

export const getGameStatus = (state) => {
    const isWin = state.getIn(['game', 'board']).reduce(
        (status, tile) => status && tile.get('isRevealed'),
        true
    );
    
    if (isWin) {
        return WINNER;
    }

    return PLAYING;
};

export const getStartTime = (state)  => {
    return state.getIn(['game', 'startedAt']);
};

export const getMovesCount = (state) => {
    return state.getIn(['game', 'moves']);
};