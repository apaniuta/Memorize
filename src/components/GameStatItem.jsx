import React from 'react';

import styles from './GameStatItem.less';

const GameStatItem = props => {
    const { label, stat } = props;

    return (
        <div className={styles.base}>
            <div className={styles.stat}>{stat}</div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};
export default GameStatItem;
