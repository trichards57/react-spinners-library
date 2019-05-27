import classNames from 'classnames';
import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './clap.module.scss';

export const ClapSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  const items = [...Array(7).keys()].map(i => (
    <div
      className={classNames(styles[`ball-${i}`], styles.ball)}
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

ClapSpinner.propTypes = componentProps;
