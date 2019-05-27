import React from 'react';
import { IComponentProps, componentProps } from '../component-props';
import styles from './circle.module.scss';

export const CircleSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{
          transform: `scale(${size / 40})`,
          borderColor: color,
          borderRightColor: 'transparent'
        }}
      />
    )
  );
};

CircleSpinner.propTypes = componentProps;
