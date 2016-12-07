import React from 'react';
import { Link } from 'react-router';

import styles from './StartPage.less';

const StartPage = () => (
    <Link to="/game" className={styles.link}>Start game</Link>
);

export default StartPage;