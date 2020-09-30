import styled from 'styled-components';
import { Paper, CircularProgress } from '@material-ui/core';

export const StyledSnackbar = styled(Paper)`
  && {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 20px;
    background-color: ${({ theme }) =>
      theme.palette.type === 'dark' ? '#E8F3F8' : '#313131'};
    color: ${({ theme }) =>
      theme.palette.type === 'dark' ? '#1D2026' : '#E8F3F8'};
  }
`;

export const StyledSnackbarProgress = styled(CircularProgress)`
  && {
    width: 20px !important;
    height: 20px !important;
    & svg {
      color: ${({ theme }) =>
        theme.palette.type === 'dark' ? '#1D2026' : '#E8F3F8'};
      font-size: 20px;
    }
  }
`;

export const StyledSnackbarText = styled.span`
  && {
    flex-grow: 1;
    margin-left: 8px;
  }
`;
