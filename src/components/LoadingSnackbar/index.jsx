import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSnackbar,
  StyledSnackbarProgress,
  StyledSnackbarText,
} from './styles';

const LoadingSnackbar = forwardRef(({ id, message }, ref) => {
  return (
    <StyledSnackbar id={id} ref={ref}>
      <StyledSnackbarProgress />
      <StyledSnackbarText>{message}</StyledSnackbarText>
    </StyledSnackbar>
  );
});

LoadingSnackbar.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default LoadingSnackbar;
