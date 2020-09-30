/* Initial State */
const ContractInitialState = {
  faena: 'FAENA',
  contractID: '0000000',
  provider: 'PROVIDER',
  contractType: 'CONTRACT_TYPE',
  begin: 'DD-MM-YYYY',
  end: 'DD-MM-YYYY',
  contractAmount: 0,
  materialTypes: 0,
  stockUSD: 0,
  ownStockUSD: 0,
  stockUnit: 0,
  ownStockUnit: 0,
  timeFactor: 0,
  consumeFactor: 0,
  nd: 0,
  v1: 0,
  pd: 0,
  vb: 0,
};

/* Methods */

/**
 *  Contract reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const ContractReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'SET_FAENA': {
      return { ...state, faena: params.payload };
    }
    case 'SET_CONTRACT_ID': {
      return { ...state, contractID: params.payload };
    }
    case 'SET_PROVIDER': {
      return { ...state, provider: params.payload };
    }
    case 'SET_CONTRACT_TYPE': {
      return { ...state, contractType: params.payload };
    }
    case 'SET_BEGIN': {
      return { ...state, begin: params.payload };
    }
    case 'SET_END': {
      return { ...state, end: params.payload };
    }
    case 'SET_CONTRACT_AMOUNT': {
      return { ...state, contractAmount: params.payload };
    }
    case 'SET_MATERIAL_TYPES': {
      return { ...state, materialTypes: params.payload };
    }
    case 'SET_STOCK_USD': {
      return { ...state, stockUSD: params.payload };
    }
    case 'SET_OWN_STOCK_USD': {
      return { ...state, ownStockUSD: params.payload };
    }
    case 'SET_STOCK_UNIT': {
      return { ...state, stockUnit: params.payload };
    }
    case 'SET_OWN_STOCK_UNIT': {
      return { ...state, ownStockUnit: params.payload };
    }
    case 'SET_TIME_FACTOR': {
      return { ...state, timeFactor: params.payload };
    }
    case 'SET_CONSUME_FACTOR': {
      return { ...state, consumeFactor: params.payload };
    }
    case 'SET_ND': {
      return { ...state, nd: params.payload };
    }
    case 'SET_V1': {
      return { ...state, v1: params.payload };
    }
    case 'SET_PD': {
      return { ...state, pd: params.payload };
    }
    case 'SET_VB': {
      return { ...state, vb: params.payload };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { ContractReducer, ContractInitialState };
