import React from 'react';
import styles from './fill.module.scss';
import { IComponentProps, componentProps } from '../component-props';

export const FillSpinner = ({
  size = 20,
  color = '#4b4c56',
  loading = true
}: IComponentProps) => {
  return (
    loading && (
      <div style={{ transform: `scale(${size / 40})` }}>
        <div className={styles.wrapper} style={{ borderColor: color }}>
          <div
            className={styles.plane}
            style={{ backgroundColor: color, borderColor: color }}
          />
        </div>
      </div>
    )
  );
};

FillSpinner.propTypes = componentProps;
