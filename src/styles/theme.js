import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#333842',
      main: '#616671',
      dark: '#1D2026',
      contrastText: '#E8F3F8',
    },
    secondary: {
      light: '#FF5C53',
      main: '#D42029',
      dark: '#9A0000',
      contrastText: '#E8F3F8',
    },
    background: {
      light: '#333842',
      main: '#282C34',
      table: '#424242',
    },
  },
  drawerWidth: 240,
  appbarWidth: 64,
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#e8eaf6',
      main: '#3f51b5',
      dark: '#1a237e',
      contrastText: '#1D2026',
    },
    secondary: {
      light: '#FF5C53',
      main: '#D42029',
      dark: '#9A0000',
      contrastText: '#E8F3F8',
    },
    background: {
      light: '#3f51b5',
      main: '#9e9e9e',
      table: '#ffffff',
    },
  },
  drawerWidth: 240,
  appbarWidth: 64,
});

export default lightTheme;
