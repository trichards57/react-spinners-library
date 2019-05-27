import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './fill.module.scss';

export const FillSpinner = ({
  size = 20,
  color = '#00ff89',
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
