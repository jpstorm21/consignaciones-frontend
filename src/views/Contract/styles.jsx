import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: -webkit-fill-available;
  height: 70vh;
`;

export const Row = styled.span`
  flex: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledStats = styled.span`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsWrapper = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10rem;
  font-size: 1.2rem;
  table {
    margin: 1rem;
    tr {
      margin-top: 1rem;
      .h {
        display: flex;
        align-items: flex-start;
      }
      .v {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .v2 {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .v3 {
        padding-left: 5rem;
        padding-right: 5rem;
      }
      td {
        padding-left: 2rem;
      }
    }
  }
`;

export const VS = styled.span`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Speedometers = styled.span`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpeedometerWrapper = styled.span`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Planning = styled.span`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  max-height: 3rem !important;
  align-self: center !important;
  margin-left: 2rem !important;
`;
