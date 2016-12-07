import { fromJS, Map, List } from 'immutable';

import { closeTiles } from '../actions';

import store from '../store';

function generateBoard({ cols, rows }) {

    const cellParams = () => Map({ isRevealed: false, value: Math.floor(Math.random() * 100) });

    let arrayLength = cols * rows / 2;
    const array = [];

    while (arrayLength--) {
        array.push(cellParams());
    }

    const cells = List(array);
    return cells
        .concat(cells)
        .sort(() => Math.random() - 0.5)
        .map((tile, idx) => tile.set('id', idx));
}

export function startGame(params) {
    const game = fromJS({
        cols: params.cols,
        rows: params.rows,
        board: generateBoard(params),
        moves: 0,
        savedTiles: [],
        startedAt: Date.now()
    });

    return game;
}

export function closeSavedTiles(game) {
    const firstTileId = game.getIn(['savedTiles', 0, 'id']);
    const secondTileId = game.getIn(['savedTiles', 1, 'id']);

    return game
        .set('savedTiles', new List())
        .setIn(['board', firstTileId, 'isRevealed'], false)
        .setIn(['board', secondTileId, 'isRevealed'], false);
}

export function revealTile(game, tileId) {
    const currentTile = game.getIn(['board', tileId]);
    const savedTiles = game.get('savedTiles');

    if (savedTiles.size < 2) {
        
        const updateSavedTiles = savedTiles.push(currentTile);
        const revealTile = game
            .set('moves', game.get('moves') + 1)
            .setIn(['board', tileId, 'isRevealed'], true);
        const updatedGame = revealTile
            .set('savedTiles', updateSavedTiles);

        if (updateSavedTiles.size === 2) {

            const firstTileValue = updatedGame.getIn(['savedTiles', 0, 'value']);
            const secondTileValue = updatedGame.getIn(['savedTiles', 1, 'value']);

            if (firstTileValue === secondTileValue) {
                return revealTile
                    .set('savedTiles', new List());
            }

            store.dispatch(closeTiles(game));

            return updatedGame;
        }

        return updatedGame;
    }

    return game;
}