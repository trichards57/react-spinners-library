import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './firework.module.scss';

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
