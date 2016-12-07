import React from 'react';

import { WINNER } from '../selectors';

import styles from './Status.less';

const Status = props => {
    const { status } = props;

    return (
        <div className={ status === WINNER ? styles.winner : styles.base}>
            {status}
        </div>
    );
};

export default Status;