import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './clap.module.scss';

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
        <div className={styles.ball0} style={{ backgroundColor: color }} />
        <div className={styles.ball1} style={{ backgroundColor: color }} />
        <div className={styles.ball2} style={{ backgroundColor: color }} />
        <div className={styles.ball3} style={{ backgroundColor: color }} />
        <div className={styles.ball4} style={{ backgroundColor: color }} />
        <div className={styles.ball5} style={{ backgroundColor: color }} />
        <div className={styles.ball6} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

ClapSpinner.propTypes = componentProps;
