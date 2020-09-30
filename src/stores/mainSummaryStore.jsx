import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { MainSummaryState, MainSummaryReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import SessionContext from './sessionStore';
import { URL } from '../config.json';

/**
 * Main Summary Context
 */
const MainSummaryContext = createContext();

/**
 * Main Summary Provider
 * @param {Object} props
 * @param {Component} props.children
 */
export const MainSummaryProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const [mainSummaryState, mainSummaryDispatch] = useReducer(
    MainSummaryReducer,
    MainSummaryState
  );

  const getData = useCallback(async () => {
    const config = {
      headers: {
        authorization: token,
      },
    };
    const loadingSnackbar = enqueueSnackbar('Cargando Información...', {
      variant: 'default',
      persist: true,
      content: (key, message) => <LoadingSnackbar id={key} message={message} />,
    });

    try {
      const rawResponse = await fetch(`${URL}/api/data/summary`, config);
      if (rawResponse.status !== 200) throw new Error('Session error.');

      const data = await rawResponse.json();

      const payload = {
        data,
      };
      mainSummaryDispatch({ type: 'DATA', payload });

      closeSnackbar(loadingSnackbar);
      return true;
    } catch (error) {
      closeSnackbar(loadingSnackbar);
      enqueueSnackbar('Error de conexión con el servidor.', {
        variant: 'error',
      });
      return false;
    }
  }, [token, closeSnackbar, enqueueSnackbar]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <MainSummaryContext.Provider
      value={{
        data: mainSummaryState.data,
        sizesPlot: mainSummaryState.sizesPlot,
        getData,
      }}
    >
      {children}
    </MainSummaryContext.Provider>
  );
};

MainSummaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainSummaryContext;
