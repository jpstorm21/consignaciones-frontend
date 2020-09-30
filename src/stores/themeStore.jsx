import React, { createContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks';

/**
 * Theme Context.
 */
const ThemeContext = createContext();

/**
 * Theme Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkTheme', false);

  const setDarkTheme = useCallback(() => {
    setIsDarkTheme(true);
  }, [setIsDarkTheme]);

  const setLightTheme = useCallback(() => {
    setIsDarkTheme(false);
  }, [setIsDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
