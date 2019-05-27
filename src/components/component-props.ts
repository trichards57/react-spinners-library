import * as PropTypes from 'prop-types';

export interface IComponentProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

export interface ITwoColourProps {
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  loading?: boolean;
}

export const componentProps = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export const twoColorProps = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
