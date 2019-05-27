import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './classic.module.scss';

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
        <div className={styles.bar0} style={{ backgroundColor: color }} />
        <div className={styles.bar1} style={{ backgroundColor: color }} />
        <div className={styles.bar2} style={{ backgroundColor: color }} />
        <div className={styles.bar3} style={{ backgroundColor: color }} />
        <div className={styles.bar4} style={{ backgroundColor: color }} />
        <div className={styles.bar5} style={{ backgroundColor: color }} />
        <div className={styles.bar6} style={{ backgroundColor: color }} />
        <div className={styles.bar7} style={{ backgroundColor: color }} />
        <div className={styles.bar8} style={{ backgroundColor: color }} />
        <div className={styles.bar9} style={{ backgroundColor: color }} />
        <div className={styles.bar10} style={{ backgroundColor: color }} />
        <div className={styles.bar11} style={{ backgroundColor: color }} />
        <div className={styles.bar12} style={{ backgroundColor: color }} />
        <div className={styles.bar13} style={{ backgroundColor: color }} />
        <div className={styles.bar14} style={{ backgroundColor: color }} />
        <div className={styles.bar15} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

ClassicSpinner.propTypes = componentProps;
