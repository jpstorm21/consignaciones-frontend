import styled from 'styled-components';

export const StyledContainer = styled.main`
  flex-grow: 1;
  padding: 2rem;
  border-radius: 8px;
  transition: ${({ theme, isDrawerOpen }) => {
    if (isDrawerOpen) {
      return theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      });
    }
    return theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    });
  }};
  margin-top: ${({ theme }) => `calc(${theme.appbarWidth / 2}px + 4rem)`};
  margin-right: 2rem;
  margin-bottom: 2rem;
  margin-left: ${({ theme, isDrawerOpen }) => {
    if (isDrawerOpen) {
      return `2rem`;
    }
    return `calc(${-theme.drawerWidth}px + 2rem)`;
  }};
  min-height: calc(100vh - 8rem);
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
