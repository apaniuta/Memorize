import React, { Component } from 'react';

import styles from './Tile.less';

export default class Tile extends Component {
    handleReveal = () => {
        const { id, isRevealed, onReveal } = this.props;

        if (!isRevealed) {
            onReveal(id);
        }
    }

    render() {
        const { isRevealed, value } = this.props;

        return (
            <span
                className={isRevealed ? styles.opened : styles.closed}
                onClick={this.handleReveal}
            >
                {isRevealed ? <div>{value}</div> : null}
            </span>
        );
    }
}