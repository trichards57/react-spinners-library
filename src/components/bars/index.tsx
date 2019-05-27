import classNames from 'classnames';
import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './bars.module.scss';

export const BarsSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  const items = [...Array(5).keys()].map(i => (
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

BarsSpinner.propTypes = componentProps;
