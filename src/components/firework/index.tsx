import React from 'react';
import styles from './firework.module.scss';
import { IComponentProps, componentProps } from '../component-props';

export const FireworkSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  return (
    loading && (
      <div style={{ transform: `scale(${size / 40})` }}>
        <div className={styles.wrapper} style={{ borderColor: color }} />
      </div>
    )
  );
};

FireworkSpinner.propTypes = componentProps;
