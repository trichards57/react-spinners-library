import classNames from 'classnames';
import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './classic.module.scss';

export const ClassicSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  const items = [...Array(16).keys()].map(i => (
    <div
      className={classNames(styles[`bar-${i}`], styles.bar)}
      style={{ backgroundColor: color }}
      key={i}
    />
  ));

  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{ transform: `scale(${size / 40})` }}
      >
        {items}
      </div>
    )
  );
};

ClassicSpinner.propTypes = componentProps;
