const LOCAL_STORAGE_KEY = 'session';

/* Initial State */
const sessionInitialState = {
  token: 'JWT',
  user: { email: 'email@email.com', name: 'NAME', type: 'TYPE' },
  isAuthenticated: false,
  isReady: false,
};

/* Methods */

const setLocalSession = async (token) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, token);
};

const deleteLocalSession = async () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
};

/**
 *  Session reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const sessionReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'SET_LOCAL_VALUE': {
      const newState = {
        ...state,
        token: params.payload.token,
        user: {
          email: params.payload.email,
          name: params.payload.name,
          type: params.payload.type,
        },
        isAuthenticated: true,
      };

      return newState;
    }
    case 'LOGIN': {
      const newState = {
        ...state,
        token: params.payload.token,
        user: {
          email: params.payload.email,
          name: params.payload.name,
          type: params.payload.type,
        },
        isAuthenticated: true,
      };

      setLocalSession(newState.token);
      return { ...newState };
    }
    case 'LOGOUT': {
      deleteLocalSession();
      return { ...sessionInitialState, isReady: true };
    }
    case 'CHECKED': {
      return { ...state, isReady: true };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { sessionReducer, sessionInitialState, LOCAL_STORAGE_KEY };
