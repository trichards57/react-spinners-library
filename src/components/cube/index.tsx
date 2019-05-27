import React from 'react';
import { ITwoColourProps, twoColorProps } from '../component-props';
import styles from './cube.module.scss';

export const CubeSpinner = ({
  size = 40,
  foregroundColor = '#00ff89',
  backgroundColor = '#4b4c56',
  loading = true
}: ITwoColourProps) => {
  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{ transform: `scale(${size / 40})` }}
      >
        <div className={styles.cubeWrapper}>
          <div className={styles.cube}>
            <div
              className={`${styles.side} ${styles.front}`}
              style={{ backgroundColor: foregroundColor }}
            />
            <div
              className={`${styles.side} ${styles.back}`}
              style={{ backgroundColor: foregroundColor }}
            />
            <div
              className={`${styles.side} ${styles.bottom}`}
              style={{ backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.top}`}
              style={{ backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.left}`}
              style={{ backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.right}`}
              style={{ backgroundColor }}
            />
          </div>
        </div>
      </div>
    )
  );
};

CubeSpinner.propTypes = twoColorProps;
