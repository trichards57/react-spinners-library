import React from 'react';
import styles from './classic.module.scss';
import { IComponentProps, standardProps } from '../component-props';

export const ClassicSpinner = ({
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
        <div className={styles['bar-11']} style={{ backgroundColor: color }} />
        <div className={styles['bar-12']} style={{ backgroundColor: color }} />
        <div className={styles['bar-13']} style={{ backgroundColor: color }} />
        <div className={styles['bar-14']} style={{ backgroundColor: color }} />
        <div className={styles['bar-15']} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

ClassicSpinner.propTypes = standardProps;
