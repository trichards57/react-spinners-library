import classNames from 'classnames';
import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './flag.module.scss';

export const FlagSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  const items = [...Array(4).keys()].map(i => (
    <div className={classNames(styles[`line-${i}`], styles.line)} key={i}>
      {[...Array(4).keys()].map(j => (
        <div
          className={classNames(styles[`plane-${i}-${j}`], styles.plane)}
          style={{ backgroundColor: color }}
          key={`${i}-${j}`}
        />
      ))}
    </div>
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

FlagSpinner.propTypes = componentProps;
