import styled from 'styled-components';
import { Modal, Card, IconButton } from '@material-ui/core';

export const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCard = styled(Card)`
  && {
    padding: 5;
    outline: none;
    width: 70%;
    max-height: 80%;
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    .MuiCardActions-root {
      justify-content: flex-end;
      padding: 1rem;
    }
    .MuiCardContent-root {
      overflow-y: scroll;
      max-height: 60vh;
    }
  }
`;

export const StyledClose = styled(IconButton)`
  && {
    box-shadow: none;
    &:focus {
      outline: 'none';
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${({ theme, isDragReject }) =>
    isDragReject ? theme.palette.secondary.light : '#bdbdbd'};
  border-style: dashed;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin: 1rem;
`;

export const FileInputWrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FileName = styled.h3`
  flex: 1;
  align-self: center;
`;

export const LeftWrapper = styled.span`
  flex: 1;
  display: flex;
  flex-direction: row;
  .MuiCheckbox-root {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const RightWrapper = styled.span`
  flex: 3;
`;
