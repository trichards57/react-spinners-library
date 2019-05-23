import React from 'react';
import PropTypes from 'prop-types';
import styles from './bars.module.scss';

export const BarsSpinner = ({ size, color, loading }) => {
  const countBars = 5;
  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{ transform: `scale(${size / 40})` }}
      >
        <div className={styles['bar-0']} style={{ backgroundColor: color }} />
        <div className={styles['bar-1']} style={{ backgroundColor: color }} />
        <div className={styles['bar-2']} style={{ backgroundColor: color }} />
        <div className={styles['bar-3']} style={{ backgroundColor: color }} />
        <div className={styles['bar-4']} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

BarsSpinner.defaultProps = {
  loading: true,
  size: 40,
  color: '#00ff89'
};

BarsSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
