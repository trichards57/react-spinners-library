import classNames from 'classnames';
import React from 'react';
import { componentProps, IComponentProps } from '../component-props';
import styles from './clap.module.scss';

export const ClapSpinner = ({
  size = 40,
  color = '#00ff89',
  loading = true
}: IComponentProps) => {
  return (
    loading && (
      <div
        className={styles.wrapper}
        style={{ transform: `scale(${size / 40})` }}
      >
        <div className={classNames(styles["ball-0"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-1"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-2"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-3"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-4"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-5"], styles.ball)} style={{ backgroundColor: color }} />
        <div className={classNames(styles["ball-6"], styles.ball)} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

ClapSpinner.propTypes = componentProps;
