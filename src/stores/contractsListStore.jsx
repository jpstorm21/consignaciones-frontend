import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import SessionContext from './sessionStore';
import { ContractsListInitialState, ContractsListReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import { URL } from '../config.json';
import faenas from '../faenas.json';

/**
 * ContractsList Context.
 */
const ContractsListContext = createContext();

/**
 * ContractsList Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const ContractsListProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const { faena } = useParams();
  const initialSnackbarRef = useRef();
  const mountedRef = useRef(true);
  const [state, dispatch] = useReducer(
    ContractsListReducer,
    ContractsListInitialState
  );

  /**
   * request data function
   */
  const requestData = useCallback(async () => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(
        `${URL}/api/data/${faenas[state.faena][0]}/contracts`,
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

  /**
   * format request data function
   */
  const formatData = useCallback(async (rawData) => {
    let data = [];

    data = rawData
      ? rawData.map((row) => {
          const contract = parseInt(row.code, 10);
          const beginDate = new Date(row.startDate);
          const endDate = new Date(row.endDate);
          const convertedAmount = parseFloat(row.amount);
          const timeConsumingPercentage = Math.floor(
            parseFloat(row.timeconsuming) * 100
          );
          const consumptionPercentage = Math.floor(
            parseFloat(row.consumption) * 100
          );
          const factorPercentage = Math.floor(parseFloat(row.factor) * 100);

          return {
            contract,
            description: row.characteristic,
            status: row.state,
            provider: row.provider,
            beginDate,
            endDate,
            amount: convertedAmount,
            timeConsuming: timeConsumingPercentage,
            amountConsuming: consumptionPercentage,
            factor: factorPercentage,
          };
        })
      : [];
    return data;
  }, []);

  /**
   * mount component effect
   */
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

  /**
   * request faena effect
   */
  useEffect(() => {
    dispatch({ type: 'SET_FAENA', payload: faena });
  }, [faena]);

  /**
   * Request data effect
   */
  useEffect(() => {
    const doRequest = async () => {
      if (state.faena === 'faena') return false;

      const rawData = await requestData();
      const data = await formatData(rawData);

      if (data.length === 0)
        enqueueSnackbar('No se recibió información del servidor.', {
          variant: 'error',
        });

      dispatch({ type: 'SET_NEW_DATA', payload: data });
      closeSnackbar(initialSnackbarRef.current);
      return true;
    };

    doRequest();
  }, [state.faena, requestData, formatData, enqueueSnackbar, closeSnackbar]);

  /**
   * updateDescription Function
   */
  const updateDescription = useCallback(
    async (contract, description) => {
      const loadingSnackbar = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });

      const data = JSON.stringify({ contract, description });

      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token,
        },
        body: `data=${encodeURIComponent(data)}`,
      };

      try {
        const rawResponse = await fetch(
          `${URL}/api/data/update-description`,
          config
        );

        if (rawResponse.status !== 200) {
          enqueueSnackbar('Error al realizar los cambios en el servidor.', {
            variant: 'error',
          });
          closeSnackbar(loadingSnackbar);
          return false;
        }

        dispatch({
          type: 'SET_DESCRIPTION',
          payload: { contract, description },
        });

        closeSnackbar(loadingSnackbar);
        return true;
      } catch (error) {
        closeSnackbar(loadingSnackbar);
        enqueueSnackbar('Error al realizar los cambios en el servidor.', {
          variant: 'error',
        });
        return false;
      }
    },
    [token, enqueueSnackbar, closeSnackbar]
  );

  return (
    <ContractsListContext.Provider
      value={{
        faena: state.faena,
        columns: state.columns,
        data: state.data,
        updateDescription,
      }}
    >
      {children}
    </ContractsListContext.Provider>
  );
};

ContractsListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContractsListContext;
