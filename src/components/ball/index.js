import React from 'react';
import PropTypes from 'prop-types';
import styles from './ball.module.scss';

export const BallSpinner = ({ size, color, loading, sizeUnit }) => {
  return (
    loading && (
      <div class={styles.wrapper} style={{ transform: `scale(${size / 40})` }}>
        <div class={styles.ball} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

BallSpinner.defaultProps = {
  loading: true,
  size: 40,
  color: '#00ff89'
};

BallSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
