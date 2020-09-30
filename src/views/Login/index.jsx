import React, { useContext, useState, useEffect, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { SessionContext } from '../../stores';
import { LoadingSnackbar } from '../../components';
import LoginComponent from './LoginComponent';

/**
 * Login View
 */
const Login = () => {
  const { isAuthenticated, isReady, login } = useContext(SessionContext);
  const [isLoading, setLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const initialSnackbarRef = useRef();
  const mountedRef = useRef(true);
  const history = useHistory();

  /* Set loading snackbar and destroy it when local session verification is done */
  useEffect(() => {
    if (!isReady && mountedRef.current) {
      initialSnackbarRef.current = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });
    } else if (mountedRef.current) closeSnackbar(initialSnackbarRef.current);
    return () => {
      mountedRef.current = false;
      closeSnackbar(initialSnackbarRef.current);
    };
  }, [isReady, enqueueSnackbar, closeSnackbar]);

  /* If the user is already authenticated, redirects to home */
  if (isAuthenticated) return <Redirect to="/" />;

  /* Submit function for login */
  const handleSubmit = async (email, password) => {
    if (isLoading) return false;

    if (!email) {
      enqueueSnackbar('Debe ingresar un usuario.', {
        variant: 'error',
      });
      return false;
    }

    if (!password) {
      enqueueSnackbar('Debe ingresar una contraseña.', {
        variant: 'error',
      });
      return false;
    }

    setLoading(true);

    const loadingSnackbar = enqueueSnackbar('Iniciando Sesión...', {
      variant: 'default',
      persist: true,
      content: (key, message) => <LoadingSnackbar id={key} message={message} />,
    });

    const loginSuccess = await login({ email, password });

    closeSnackbar(loadingSnackbar);
    setLoading(false);

    if (!mountedRef.current) return false;

    if (loginSuccess) {
      history.push('/');
      return true;
    }
    enqueueSnackbar('Usuario y/o contraseña inválidos.', {
      variant: 'error',
    });
    return false;
  };

  /* login component render */
  return isReady ? (
    <LoginComponent isLoading={isLoading} onSubmit={handleSubmit} />
  ) : null;
};

export default Login;
