import styled from 'styled-components';
import {
  Drawer,
  Switch,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export const StyledDrawer = styled(Drawer)`
  && {
    width: ${({ theme }) => theme.drawerWidth}px;
    flex-shrink: 0;
    overflow-x: hidden;
    & div {
      background-color: ${({ theme }) => theme.palette.primary.dark};
      color: ${({ theme }) => theme.palette.secondary.contrastText};
      width: ${({ theme }) => theme.drawerWidth}px;
      overflow-x: hidden;
    }
    & ul {
      width: ${({ theme }) => theme.drawerWidth}px;
    }
  }
`;

export const StyledDrawerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
  padding-top: 1rem;
  overflow-y: hidden;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  & button {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;

export const StyledLogo = styled.img`
  width: 250px;
  margin-left: 1rem;
  flex: 2;
`;

export const StyledIconButton = styled(IconButton)`
  && {
    align-self: end;
    flex: 2;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const StyledSwitch = styled(Switch)`
  && {
  }
`;

export const StyledList = styled(List)`
  && {
  }
`;

export const StyledColapseList = styled(List)`
  && {
    & div {
      background-color: ${({ theme }) => theme.palette.background.light};
    }
  }
`;

export const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    flex-direction: row;
    width: ${({ theme }) => theme.drawerWidth}px;
    overflow-x: hidden;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  && {
    flex: 1;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  && {
    flex-grow: 4;
  }
`;

export const StyledDrawerFooter = styled.div`
  display: flex;
  flex-grow: 4;
  align-items: flex-end;
`;
