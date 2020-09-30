import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import SessionContext from './sessionStore';
import { ResumeInitialState, ResumeReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import { URL } from '../config.json';
import faenas from '../faenas.json';

/**
 * Resume Context.
 */
const ResumeContext = createContext();

/**
 * Resume Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const ResumeProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const { faena } = useParams();
  const [state, dispatch] = useReducer(ResumeReducer, ResumeInitialState);

  const requestData = useCallback(async () => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(
        `${URL}/api/data/${faenas[state.faena][0]}/resume`,
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
  }, [state.faena, token, enqueueSnackbar]);

  const formatData = useCallback(async (rawData) => {
    let data = [];

    data = rawData
      ? {
          active: parseInt(rawData.activeContracts, 10),
          closeToExpire: parseInt(rawData.almostContracts, 10),
          expired: parseInt(rawData.expiredContracts, 10),
          materialTypes: parseInt(rawData.materialTypes, 10),
          ownStockUSD: parseInt(rawData.ownStockUSD, 10),
          contracts: rawData.top5.map((item) => {
            return {
              provider: item.provider
                .split(' ')
                .filter((c) => c !== ' ' && c !== '' && c !== '\t')
                .slice(1)
                .reduce((accumulated, current) => `${accumulated} ${current}`)
                .slice(0, 17),
              consignedStockUSD: parseInt(item.amountusd, 10),
              ownStockUSD: parseInt(item.ownAmountusd, 10),
              consignedStockUnit: parseInt(item.amount, 10),
              ownStockUnit: parseInt(item.ownAmount, 10),
            };
          }),
        }
      : {};
    return data;
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_FAENA', payload: faena });
  }, [faena]);

  useEffect(() => {
    const doRequest = async () => {
      if (state.faena === 'faena') return false;

      const loadingSnackbar = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });

      const rawData = await requestData();

      if (!rawData) {
        closeSnackbar(loadingSnackbar);
        return false;
      }

      const data = await formatData(rawData);

      if (Object.keys(data).length === 0) {
        enqueueSnackbar('No se recibió información del servidor.', {
          variant: 'error',
        });
        closeSnackbar(loadingSnackbar);
        return false;
      }

      dispatch({ type: 'SET_ACTIVE', payload: data.active });
      dispatch({ type: 'SET_CLOSE_TO_EXPIRE', payload: data.closeToExpire });
      dispatch({ type: 'SET_EXPIRED', payload: data.expired });
      dispatch({ type: 'SET_MATERIAL_TYPES', payload: data.materialTypes });
      dispatch({ type: 'SET_OWN_STOCK_USD', payload: data.ownStockUSD });
      dispatch({
        type: 'SET_CONTRACTS',
        payload: [...data.contracts],
      });

      closeSnackbar(loadingSnackbar);
      return true;
    };

    doRequest();
  }, [state.faena, requestData, formatData, enqueueSnackbar, closeSnackbar]);

  return (
    <ResumeContext.Provider
      value={{
        faena: state.faena,
        active: state.active,
        closeToExpire: state.closeToExpire,
        expired: state.expired,
        materialTypes: state.materialTypes,
        ownStockUSD: state.ownStockUSD,
        contracts: state.contracts,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

ResumeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResumeContext;
