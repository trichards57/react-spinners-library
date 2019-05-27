import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
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
          borderColor: color,
          borderRightColor: 'transparent',
          transform: `scale(${size / 40})`
        }}
      />
    )
  );
};

CircleSpinner.propTypes = componentProps;
