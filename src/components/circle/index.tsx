import React from 'react';
import PropTypes from 'prop-types';
import { IComponentProps } from '../component-props';
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

CircleSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
