import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './bars.module.scss';

export const BarsSpinner = ({
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
        <div className={styles.bar0} style={{ backgroundColor: color }} />
        <div className={styles.bar1} style={{ backgroundColor: color }} />
        <div className={styles.bar2} style={{ backgroundColor: color }} />
        <div className={styles.bar3} style={{ backgroundColor: color }} />
        <div className={styles.bar4} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

BarsSpinner.propTypes = componentProps;
