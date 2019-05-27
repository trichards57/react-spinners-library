import React from 'react';
import styles from './flag.module.scss';
import { IComponentProps, componentProps } from '../component-props';

export const FlagSpinner = ({
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
        <div className={styles['line-0']}>
          <div className={styles['plane-0-0']} style={{ backgroundColor: color }} />
          <div className={styles['plane-0-1']} style={{ backgroundColor: color }} />
          <div className={styles['plane-0-2']} style={{ backgroundColor: color }} />
          <div className={styles['plane-0-3']} style={{ backgroundColor: color }} />
        </div>
        <div className={styles['line-1']}>
          <div className={styles['plane-1-0']} style={{ backgroundColor: color }} />
          <div className={styles['plane-1-1']} style={{ backgroundColor: color }} />
          <div className={styles['plane-1-2']} style={{ backgroundColor: color }} />
          <div className={styles['plane-1-3']} style={{ backgroundColor: color }} />
        </div>
        <div className={styles['line-2']}>
          <div className={styles['plane-2-0']} style={{ backgroundColor: color }} />
          <div className={styles['plane-2-1']} style={{ backgroundColor: color }} />
          <div className={styles['plane-2-2']} style={{ backgroundColor: color }} />
          <div className={styles['plane-2-3']} style={{ backgroundColor: color }} />
        </div>
        <div className={styles['line-3']}>
          <div className={styles['plane-3-0']} style={{ backgroundColor: color }} />
          <div className={styles['plane-3-1']} style={{ backgroundColor: color }} />
          <div className={styles['plane-3-2']} style={{ backgroundColor: color }} />
          <div className={styles['plane-3-3']} style={{ backgroundColor: color }} />
        </div>
      </div>
    )
  );
};

FlagSpinner.propTypes = componentProps;
