import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  sessionInitialState,
  sessionReducer,
  LOCAL_STORAGE_KEY,
} from './reducer';
import { URL } from '../config.json';

/**
 * Session Context.
 */
const SessionContext = createContext();

/**
 * Session Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const SessionProvider = ({ children }) => {
  const [sessionState, sessionDispatch] = useReducer(
    sessionReducer,
    sessionInitialState
  );

  const checkSession = async ({ token }) => {
    const data = JSON.stringify({ token });

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `data=${encodeURIComponent(data)}`,
    };

    try {
      const rawResponse = await fetch(`${URL}/api/auth/checkLogin`, config);

      if (rawResponse.status !== 200) throw new Error('Sessión no válida');

      const response = await rawResponse.json();

      return {
        token: response.token,
        email: response.user.email,
        name: response.user.name,
        type: response.user.type,
      };
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const checkLocalValue = async () => {
      const localStoredValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);

      if (localStoredValue !== null && localStoredValue !== undefined) {
        const sessionData = await checkSession({
          token: localStoredValue,
        });

        if (!sessionData) {
          sessionDispatch({ type: 'LOGOUT' });
          sessionDispatch({ type: 'CHECKED' });
          return false;
        }

        const payload = {
          token: sessionData.token,
          email: sessionData.email,
          name: sessionData.name,
          type: sessionData.type,
        };

        sessionDispatch({ type: 'SET_LOCAL_VALUE', payload });
      }
      sessionDispatch({ type: 'CHECKED' });
      return true;
    };

    checkLocalValue();
  }, []);

  const login = async ({ email, password }) => {
    const data = JSON.stringify({ email, password });

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `data=${encodeURIComponent(data)}`,
    };

    try {
      const rawResponse = await fetch(`${URL}/api/auth/login`, config);
      const response = await rawResponse.json();
      const payload = {
        token: response.token,
        email: response.user.email,
        name: response.user.name,
        type: response.user.type,
      };

      sessionDispatch({ type: 'LOGIN', payload });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    sessionDispatch({ type: 'LOGOUT' });
  };

  return (
    <SessionContext.Provider
      value={{
        token: sessionState.token,
        user: sessionState.user,
        isAuthenticated: sessionState.isAuthenticated,
        isReady: sessionState.isReady,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionContext;
