import React from 'react';

import styles from './App.less';

const App = props => (
        <div className={styles.base}>
            {props.children}
        </div>
);

export default App;