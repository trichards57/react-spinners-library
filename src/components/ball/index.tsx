import React from 'react';
import styles from './ball.module.scss';
import { IComponentProps, standardProps } from '../component-props';

export const BallSpinner = ({
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
        <div className={styles.ball} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

BallSpinner.propTypes = standardProps;
