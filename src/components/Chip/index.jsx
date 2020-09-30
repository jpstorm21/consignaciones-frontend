import React from 'react';
import PropTypes from 'prop-types';
import { StyledChip } from './styles';

const Chip = ({ children, color }) => {
  return <StyledChip color={color}>{children}</StyledChip>;
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Chip.defaultProps = {
  color: 'gray',
};

export default Chip;
