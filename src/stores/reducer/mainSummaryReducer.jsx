/* Initial State */
const MainSummaryState = {
  data: {
    insumosant: 0,
    insumoscen: 0,
    insumoscmz: 0,
    insumosmlp: 0,
    materialesconsignadosant: 0,
    materialesconsignadoscen: 0,
    materialesconsignadoscmz: 0,
    materialesconsignadosmlp: 0,
    materialesporvencerant: 0,
    materialesporvencercen: 0,
    materialesporvencercmz: 0,
    materialesporvencermlp: 0,
    montoinsumosant: 0,
    montoinsumoscen: 0,
    montoinsumoscmz: 0,
    montoinsumosmlp: 0,
    montooperacionalant: 0,
    montooperacionalcen: 0,
    montooperacionalcmz: 0,
    montooperacionalmlp: 0,
    montosinasignarant: 0,
    montosinasignarcen: 0,
    montosinasignarcmz: 0,
    montosinasignarmlp: 0,
    operacionalesant: 0,
    operacionalescen: 0,
    operacionalescmz: 0,
    operacionalesmlp: 0,
    porVencerant: 0,
    porVencercen: 0,
    porVencercmz: 0,
    porVencermlp: 0,
    sinasignarant: 0,
    sinasignarcen: 0,
    sinasignarcmz: 0,
    sinasignarmlp: 0,
    vencidosant: 0,
    vencidoscen: 0,
    vencidoscmz: 0,
    vencidosmlp: 0,
    vigentesant: 0,
    vigentescen: 0,
    vigentescmz: 0,
    vigentesmlp: 0,
  },
  sizesPlot: {
    contracts: {
      height: 150,
      width: 300,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 30,
      },
    },
    contractsType: {
      height: 250,
      width: 300,
      margin: {
        top: 10, // 60
        right: 0,
        bottom: 0,
        left: 30,
      },
    },
    usd: {
      height: 500, // 382
      width: 205,
      margin: {
        top: 20, // 0
        right: 0,
        bottom: 0,
        left: 55,
      },
    },
    materials: {
      height: 500, // 382
      width: 215,
      margin: {
        top: 20, // 0
        right: 0,
        bottom: 0,
        left: 50,
      },
    },
  },
};

/**
 *  User List reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const MainSummaryReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'DATA': {
      const newState = {
        ...state,
        data: params.payload.data,
      };

      return newState;
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { MainSummaryState, MainSummaryReducer };
