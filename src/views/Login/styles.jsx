import styled from 'styled-components';

export const LoginContainer = styled.span`
  display: flex;
  flex: 1;
  height: 100vh;
  width: -webkit-fill-available;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 2rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.light};
`;

export const ButtonWrapper = styled.span`
  margin-top: 2rem;
`;
