import { createGlobalStyle } from 'styled-components';

const GlobalAppStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.background.main};
    overflow-x: hidden
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .MuiInputBase-root{
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .MuiPaper-elevation2 {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.background.table};
  }

  .MuiTableCell-root {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.background.table};
    display: table-cell;
    padding: 16px;
    line-height: 1.43;
    border-bottom: 1px solid ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(81, 81, 81, 1)`
        : `rgba(224, 224, 224, 1)`} ;
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }

  .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .MTablePaginationInner-root-64 {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.7)`
        : `rgba(0, 0, 0, 0.54)`} ;
    display: flex;
    flex-shrink: 0;
  }

  .MuiTablePagination-selectIcon {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.3)`
        : `rgba(0, 0, 0, 0.26)`} ;
  }

  .MuiInput-underline:before{
    border-bottom: 1px solid ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.7)`
        : `rgba(0, 0, 0, 0.42)`} ;
  }

  .MuiChip-root {
    background-color: ${({ theme }) =>
      theme.palette.type === 'dark' ? `#616161` : `#e0e0e0`} ;
    color: ${({ theme }) =>
      theme.palette.type === 'dark' ? `#fff` : `rgba(0, 0, 0, 0.87)`} ;
  }

  .MuiSwitch-switchBase {
    color: #bdbdbd;
  }

  .MuiSwitch-track {
    background-color: #fff;
  }

  .MuiTablePagination-toolbar{
    .MuiIconButton-root {
      color: ${({ theme }) =>
        theme.palette.type === 'dark' ? `#fff` : `rgba(0, 0, 0, 0.54);`};
    }
    .MuiIconButton-root.Mui-disabled {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.3)`
        : `rgba(0, 0, 0, 0.26)`} !important;
    }
  }

  .MuiTableSortLabel-root:hover {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.54)`
        : `rgba(0, 0, 0, 0.54)`};
  }

  .MuiPickersToolbar-toolbar {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiPickersToolbarText-toolbarTxt {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }

  .MuiPickersDay-day {
      color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .MuiPickersBasePicker-pickerView {
    color: ${({ theme }) => theme.palette.primary.contrastText} !important;
    background-color: ${({ theme }) =>
      theme.palette.background.table} !important;
  }

  .MuiDialogActions-root {
    color: ${({ theme }) => theme.palette.primary.contrastText} !important;
    background-color: ${({ theme }) =>
      theme.palette.background.table} !important;
    .MuiButton-textPrimary {
      color: ${({ theme }) => theme.palette.primary.contrastText} !important;
    }
  }

  .MuiPickersCalendarHeader-dayLabel {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.5)`
        : `rgba(0, 0, 0, 0.38)`};
  }

  .MuiPickersCalendarHeader-iconButton {
    background-color: ${({ theme }) => theme.palette.background.table};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .MuiIconButton-root:hover {
    background-color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.08)`
        : `rgba(0, 0, 0, 0.04)`};
  }

  .MuiTableSortLabel-root.MuiTableSortLabel-active {
    color: ${({ theme }) =>
      theme.palette.type === 'dark' ? `#fff` : `rgba(0, 0, 0, 0.87)`};
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `2px solid #fff`
        : `2px solid rgba(0, 0, 0, 0.87)`};
  }

  .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.7)`
        : `rgba(0, 0, 0, 0.54)`};
  }

  .MuiSelect-icon {
    color: ${({ theme }) =>
      theme.palette.type === 'dark' ? `#fff` : `rgba(0, 0, 0, 0.54)`};
  }

  .MuiTableRow-root {
    .MuiButtonBase-root.MuiIconButton-root {
      .MuiIconButton-label {
        .material-icons.MuiIcon-root {
          color: ${({ theme }) =>
            theme.palette.type === 'dark'
              ? `#fff`
              : `rgba(0, 0, 0, 0.54)`} !important;
        }
      }
    }
  }

  .MuiFormLabel-root {
    color: ${({ theme }) =>
      theme.palette.type === 'dark'
        ? `rgba(255, 255, 255, 0.7)`
        : `rgba(0, 0, 0, 0.54)`};
  }

  .MuiDivider-root {
    background-color: ${({ theme }) =>
      theme.palette.type === 'dark' ? `#e8f3f8` : `rgba(0,0,0,0.87)`};
  }
`;

export default GlobalAppStyles;
