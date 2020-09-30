import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import SessionContext from './sessionStore';
import { ContractInitialState, ContractReducer } from './reducer';
import { LoadingSnackbar } from '../components';
import { URL } from '../config.json';
import faenas from '../faenas.json';

/**
 * Contract Context.
 */
const ContractContext = createContext();

/**
 * Contract Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const ContractProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const { faena, contract } = useParams();
  const [state, dispatch] = useReducer(ContractReducer, ContractInitialState);

  const requestData = useCallback(async () => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const rawResponse = await fetch(
        `${URL}/api/data/${faenas[state.faena][0]}/contracts/${
          state.contractID
        }`,
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
  }, [state.faena, state.contractID, token, enqueueSnackbar]);

  const formatData = useCallback(async (rawData) => {
    const data = {};
    data.provider = rawData.provider;
    data.contractType = rawData.contractType;
    data.startDate = moment(rawData.startDate).format('DD-MM-YYYY');
    data.endDate = moment(rawData.endDate).format('DD-MM-YYYY');
    data.contractAmount = parseInt(rawData.contractAmount, 10);
    data.materialTypes = parseInt(rawData.materialTypes, 10);
    data.amountusd = parseInt(rawData.amountusd, 10);
    data.ownAmountusd = parseInt(rawData.ownAmountusd, 10);
    data.amount = parseInt(rawData.amount, 10);
    data.ownAmount = parseInt(rawData.ownAmount, 10);
    data.timeconsuming = parseInt(parseFloat(rawData.timeconsuming) * 100, 10);
    data.amountconsuming = parseInt(
      parseFloat(rawData.amountconsuming) * 100,
      10
    );
    data.ndusd = parseInt(rawData.ndusd, 10);
    data.v1usd = parseInt(rawData.v1usd, 10);
    data.pdusd = parseInt(rawData.pdusd, 10);
    data.vbusd = parseInt(rawData.vbusd, 10);

    return data;
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_FAENA', payload: faena });
  }, [faena]);

  useEffect(() => {
    dispatch({ type: 'SET_CONTRACT_ID', payload: contract });
  }, [contract]);

  useEffect(() => {
    const doRequest = async () => {
      if (state.faena === 'faena' || state.contractID === '0000000')
        return false;

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

      dispatch({
        type: 'SET_PROVIDER',
        payload: data.provider,
      });
      dispatch({
        type: 'SET_CONTRACT_TYPE',
        payload: data.contractType,
      });
      dispatch({ type: 'SET_BEGIN', payload: data.startDate });
      dispatch({ type: 'SET_END', payload: data.endDate });
      dispatch({ type: 'SET_CONTRACT_AMOUNT', payload: data.contractAmount });
      dispatch({ type: 'SET_MATERIAL_TYPES', payload: data.materialTypes });
      dispatch({ type: 'SET_STOCK_USD', payload: data.amountusd });
      dispatch({ type: 'SET_OWN_STOCK_USD', payload: data.ownAmountusd });
      dispatch({ type: 'SET_STOCK_UNIT', payload: data.amount });
      dispatch({ type: 'SET_OWN_STOCK_UNIT', payload: data.ownAmount });
      dispatch({ type: 'SET_TIME_FACTOR', payload: data.timeconsuming });
      dispatch({ type: 'SET_CONSUME_FACTOR', payload: data.amountconsuming });
      dispatch({ type: 'SET_ND', payload: data.ndusd });
      dispatch({ type: 'SET_V1', payload: data.v1usd });
      dispatch({ type: 'SET_PD', payload: data.pdusd });
      dispatch({ type: 'SET_VB', payload: data.vbusd });
      closeSnackbar(loadingSnackbar);
      return true;
    };

    doRequest();
  }, [
    state.faena,
    state.contractID,
    requestData,
    formatData,
    enqueueSnackbar,
    closeSnackbar,
  ]);

  return (
    <ContractContext.Provider
      value={{
        faena: state.faena,
        contract: state.contractID,
        provider: state.provider,
        contractType: state.contractType,
        begin: state.begin,
        end: state.end,
        contractAmount: state.contractAmount,
        materialTypes: state.materialTypes,
        stockUSD: state.stockUSD,
        ownStockUSD: state.ownStockUSD,
        stockUnit: state.stockUnit,
        ownStockUnit: state.ownStockUnit,
        timeFactor: state.timeFactor,
        consumeFactor: state.consumeFactor,
        nd: state.nd,
        v1: state.v1,
        pd: state.pd,
        vb: state.vb,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

ContractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContractContext;
