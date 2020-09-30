import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

const ContentContainer = ({ children, isDrawerOpen }) => {
  return (
    <StyledContainer isDrawerOpen={isDrawerOpen}>{children}</StyledContainer>
  );
};

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default ContentContainer;
