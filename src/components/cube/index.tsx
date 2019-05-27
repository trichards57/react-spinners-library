import React from 'react';
import styles from './cube.module.scss';
import { twoColorProps, ITwoColourProps } from '../component-props';

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
              style={{ backgroundColor: backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.top}`}
              style={{ backgroundColor: backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.left}`}
              style={{ backgroundColor: backgroundColor }}
            />
            <div
              className={`${styles.side} ${styles.right}`}
              style={{ backgroundColor: backgroundColor }}
            />
          </div>
        </div>
      </div>
    )
  );
};

CubeSpinner.propTypes = twoColorProps;
