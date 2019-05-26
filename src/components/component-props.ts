import * as PropTypes from 'prop-types';

export interface IComponentProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

export const standardProps = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};
