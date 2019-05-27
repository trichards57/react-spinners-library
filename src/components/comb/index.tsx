import React from 'react';
import styles from './comb.module.scss';
import { IComponentProps, componentProps } from '../component-props';

export const CombSpinner = ({
  size = 100,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
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
        <div className={styles['bar-5']} style={{ backgroundColor: color }} />
        <div className={styles['bar-6']} style={{ backgroundColor: color }} />
        <div className={styles['bar-7']} style={{ backgroundColor: color }} />
        <div className={styles['bar-8']} style={{ backgroundColor: color }} />
        <div className={styles['bar-9']} style={{ backgroundColor: color }} />
        <div className={styles['bar-10']} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

CombSpinner.propTypes = componentProps;
