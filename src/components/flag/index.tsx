import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './flag.module.scss';

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
        <div className={styles.line0}>
          <div className={styles.plane00} style={{ backgroundColor: color }} />
          <div className={styles.plane01} style={{ backgroundColor: color }} />
          <div className={styles.plane02} style={{ backgroundColor: color }} />
          <div className={styles.plane03} style={{ backgroundColor: color }} />
        </div>
        <div className={styles.line1}>
          <div className={styles.plane10} style={{ backgroundColor: color }} />
          <div className={styles.plane11} style={{ backgroundColor: color }} />
          <div className={styles.plane12} style={{ backgroundColor: color }} />
          <div className={styles.plane13} style={{ backgroundColor: color }} />
        </div>
        <div className={styles.line2}>
          <div className={styles.plane20} style={{ backgroundColor: color }} />
          <div className={styles.plane21} style={{ backgroundColor: color }} />
          <div className={styles.plane22} style={{ backgroundColor: color }} />
          <div className={styles.plane23} style={{ backgroundColor: color }} />
        </div>
        <div className={styles.line3}>
          <div className={styles.plane30} style={{ backgroundColor: color }} />
          <div className={styles.plane31} style={{ backgroundColor: color }} />
          <div className={styles.plane32} style={{ backgroundColor: color }} />
          <div className={styles.plane33} style={{ backgroundColor: color }} />
        </div>
      </div>
    )
  );
};

FlagSpinner.propTypes = componentProps;
