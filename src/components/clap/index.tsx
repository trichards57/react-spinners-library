import React from 'react';
import PropTypes from 'prop-types';
import styles from './clap.module.scss';
import { IComponentProps } from '../component-props';

export const ClapSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{ transform: `scale(${size / 40})` }}
      >
        <div className={styles['ball-0']} style={{ backgroundColor: color }} />
        <div className={styles['ball-1']} style={{ backgroundColor: color }} />
        <div className={styles['ball-2']} style={{ backgroundColor: color }} />
        <div className={styles['ball-3']} style={{ backgroundColor: color }} />
        <div className={styles['ball-4']} style={{ backgroundColor: color }} />
        <div className={styles['ball-5']} style={{ backgroundColor: color }} />
        <div className={styles['ball-6']} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

ClapSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
