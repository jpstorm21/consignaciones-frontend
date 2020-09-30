import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useParams, useLocation } from 'react-router-dom';
import SessionContext from './sessionStore';
import { MaterialsListInitialState, MaterialsListReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import { URL } from '../config.json';
import faenas from '../faenas.json';

/**
 * MaterialsList Context.
 */
const MaterialsListContext = createContext();

/**
 * MaterialsList Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const MaterialsListProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const { faena } = useParams();
  const contrato = new URLSearchParams(useLocation().search).get('contrato');
  const initialSnackbarRef = useRef();
  const mountedRef = useRef(true);
  const [state, dispatch] = useReducer(
    MaterialsListReducer,
    MaterialsListInitialState
  );

  const requestData = useCallback(async () => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(
        `${URL}/api/data/${faenas[state.faena][1]}/materials`,
        config
      );

      if (rawResponse.status !== 200) throw new Error('Session error.');

      const response = await rawResponse.json();

      return response;
    } catch (error) {
      enqueueSnackbar('Error de conexión con el servidor.', {
        variant: 'error',
      });
      return false;
    }
  }, [token, state.faena, enqueueSnackbar]);

  const formatData = useCallback(async (rawData) => {
    let data = [];

    data = rawData
      ? rawData.map((row) => {
          const ownStock = parseInt(row.ownStock, 10);
          const consignedStock = parseInt(row.consignedStock, 10);

          return {
            ...row,
            ownStock,
            consignedStock,
          };
        })
      : [];
    return data;
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_FAENA', payload: faena });
  }, [faena]);

  useEffect(() => {
    dispatch({
      type: 'SET_CONTRATO',
      payload: contrato || 'contrato',
    });
  }, [contrato]);

  useEffect(() => {
    if (state.faena !== 'faena')
      initialSnackbarRef.current = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });
    return () => {
      mountedRef.current = false;
      closeSnackbar(initialSnackbarRef.current);
    };
  }, [state.faena, enqueueSnackbar, closeSnackbar]);

  useEffect(() => {
    const doRequest = async () => {
      if (state.faena === 'faena') return false;

      const rawData = await requestData();
      let data = await formatData(rawData);

      if (data.length === 0)
        enqueueSnackbar('No se recibió información del servidor.', {
          variant: 'error',
        });

      if (state.contract !== 'contrato')
        data = data.filter((x) => x.contract === state.contract);

      dispatch({ type: 'SET_NEW_DATA', payload: data });
      closeSnackbar(initialSnackbarRef.current);
      return true;
    };

    doRequest();
  }, [
    state.faena,
    requestData,
    enqueueSnackbar,
    closeSnackbar,
    state.contract,
    formatData,
  ]);

  return (
    <MaterialsListContext.Provider
      value={{
        faena: state.faena,
        columns: state.columns,
        data: state.data,
        contract: state.contract,
      }}
    >
      {children}
    </MaterialsListContext.Provider>
  );
};

MaterialsListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MaterialsListContext;
