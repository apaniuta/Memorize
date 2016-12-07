import React from 'react';

import MovesCount from '../containers/MovesCount.jsx';
import GameTimer from '../containers/GameTimer.jsx';

import styles from './Footer.less';

const Footer = () => (
    <div className={styles.base}>
        <MovesCount />
        <GameTimer />
    </div>
);

export default Footer;