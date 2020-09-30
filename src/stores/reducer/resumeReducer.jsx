/* Initial State */
const ResumeInitialState = {
  faena: 'faena',
  active: 0,
  closeToExpire: 0,
  expired: 0,
  materialTypes: '0',
  ownStockUSD: '0',
  contracts: [
    {
      provider: 'providerName',
      consignedStockUSD: 0,
      ownStockUSD: 0,
      consignedStockUnit: 0,
      ownStockUnit: 0,
    },
    {
      provider: 'providerName',
      consignedStockUSD: 0,
      ownStockUSD: 0,
      consignedStockUnit: 0,
      ownStockUnit: 0,
    },
    {
      provider: 'providerName',
      consignedStockUSD: 0,
      ownStockUSD: 0,
      consignedStockUnit: 0,
      ownStockUnit: 0,
    },
    {
      provider: 'providerName',
      consignedStockUSD: 0,
      ownStockUSD: 0,
      consignedStockUnit: 0,
      ownStockUnit: 0,
    },
    {
      provider: 'providerName',
      consignedStockUSD: 0,
      ownStockUSD: 0,
      consignedStockUnit: 0,
      ownStockUnit: 0,
    },
  ],
};

/* Methods */
const formatNumber = (value) => {
  const fValue = `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);

  return fValue;
};

/**
 *  Resume reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const ResumeReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'SET_FAENA': {
      return { ...state, faena: params.payload };
    }
    case 'SET_ACTIVE': {
      return { ...state, active: params.payload };
    }
    case 'SET_CLOSE_TO_EXPIRE': {
      return { ...state, closeToExpire: params.payload };
    }
    case 'SET_EXPIRED': {
      return { ...state, expired: params.payload };
    }
    case 'SET_MATERIAL_TYPES': {
      return { ...state, materialTypes: formatNumber(params.payload) };
    }
    case 'SET_OWN_STOCK_USD': {
      return { ...state, ownStockUSD: `$${formatNumber(params.payload)}` };
    }
    case 'SET_CONTRACTS': {
      return { ...state, contracts: [...params.payload] };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { ResumeReducer, ResumeInitialState };
