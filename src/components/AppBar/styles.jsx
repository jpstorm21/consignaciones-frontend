import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    width: ${({ theme, $isDrawerOpen }) => {
      if ($isDrawerOpen) {
        return `calc(100% - ${theme.drawerWidth}px)`;
      }
      return `100%`;
    }};
    transition: ${({ theme, $isDrawerOpen }) => {
      if ($isDrawerOpen) {
        return theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        });
      }
      return theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      });
    }};
    & div {
      display: flex;
      flex-direction: row;
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
  }
`;

export const StyledContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 4;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`;

export const StyledTitle = styled.h2`
  margin-left: 4rem;
`;
