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
  color: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number
};

export const twoColorProps = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number
};
