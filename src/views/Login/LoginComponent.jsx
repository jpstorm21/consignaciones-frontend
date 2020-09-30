import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { LoginContainer, LoginForm, ButtonWrapper } from './styles';
import { Button } from '../../components';

const LoginComponent = ({ isLoading, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <TextField
          label="E-Mail"
          value={email}
          disabled={isLoading}
          autoComplete="email"
          onChange={(event) => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          disabled={isLoading}
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
        />
        <ButtonWrapper>
          <Button
            disabled={isLoading}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </ButtonWrapper>
      </LoginForm>
    </LoginContainer>
  );
};

LoginComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
