import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { StyledAppBar, StyledContent, StyledTitle } from './styles';

const AppBar = ({
  children,
  isDrawerOpen,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const handleClickDrawerButton = () => {
    if (isDrawerOpen) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };

  return (
    <StyledAppBar position="fixed" $isDrawerOpen={isDrawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleClickDrawerButton}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <StyledTitle>Sistema de contratos en consignación</StyledTitle>
        <StyledContent>{children}</StyledContent>
      </Toolbar>
    </StyledAppBar>
  );
};

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default AppBar;
