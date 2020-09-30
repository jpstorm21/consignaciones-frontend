import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { Router } from './components';
import { lightTheme, darkTheme, GlobalAppStyles } from './styles';
import { ThemeContext, SessionProvider } from './stores';

const App = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <MuiThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <SessionProvider>
            <CssBaseline />
            <GlobalAppStyles />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SessionProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
