import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core/';

export const StyleButton = styled(Button)`
  && {
    & span {
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
  }
`;

export const StyleButtonRight = styled(Button)`
  && {
    & span {
      color: ${({ theme }) => theme.palette.secondary.contrastText};
    }
    width: 167px !important;
  }
`;

export const StyleTextfield = styled(TextField)`
  && {
    flex: 2;
    flex-grow: 0.48;
  }
`;

export const FormContainer = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RowContainer = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
