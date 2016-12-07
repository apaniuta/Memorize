import React from 'react';

import Tile from './Tile.jsx';

import styles from './Board.less';

const Board = props => {
    const { rows, onReveal } = props;

    return (
        <div className={styles.base}>
            {
                rows.map((row, idx) =>
                    <div key={idx} className={styles.row}>
                        {
                            row.map(tile =>
                                <Tile
                                    key={tile.get('id')}
                                    id={tile.get('id')}
                                    value={tile.get('value')}
                                    isRevealed={tile.get('isRevealed')}
                                    onReveal={onReveal}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Board;