import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './ball.module.scss';
import { IComponentProps } from '../component-props';

export const BallSpinner = ({
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
        <div className={styles.ball} style={{ backgroundColor: color }} />
      </div>
    )
  );
};

BallSpinner.defaultProps = {
  loading: true,
  size: 40,
  color: '#00ff89'
};

BallSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
