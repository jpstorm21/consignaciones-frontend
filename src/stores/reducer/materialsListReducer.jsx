/* Initial State */
const MaterialsListInitialState = {
  faena: 'faena',
  contract: 'contrato',
  columns: [
    {
      title: 'Material',
      field: 'material',
      grouping: false,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Descripción',
      field: 'descripcion',
      grouping: false,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Indicador',
      field: 'indicator',
      lookup: {
        A: 'A',
        B: 'B',
        C: 'C',
      },
      defaultFilter: [],
      grouping: true,
      filtering: true,
      editable: 'never',
    },
    {
      title: 'Planificación',
      field: 'planningFeature',
      lookup: {
        ND: 'ND',
        PD: 'PD',
        V1: 'V1',
        VB: 'VB',
      },
      defaultFilter: [],
      grouping: true,
      filtering: true,
      editable: 'never',
    },
    {
      title: 'Stock Propio',
      field: 'ownStock',
      grouping: false,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Stock Consignado',
      field: 'consignedStock',
      grouping: false,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Bodega',
      field: 'center',
      grouping: true,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Contrato',
      field: 'contract',
      grouping: true,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Proveedor',
      field: 'provider',
      grouping: true,
      filtering: false,
      editable: 'never',
    },
  ],
  data: [],
};

/* Methods */

/**
 *  ContractsList reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const MaterialsListReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'RESET': {
      return { ...MaterialsListInitialState };
    }
    case 'SET_FAENA': {
      return { ...state, faena: params.payload };
    }
    case 'SET_NEW_DATA': {
      return { ...state, data: params.payload };
    }
    case 'SET_CONTRATO': {
      return { ...state, contract: params.payload };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { MaterialsListReducer, MaterialsListInitialState };
