import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 70vh;
`;

export const Row = styled.span`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.span`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SubColumn = styled.span`
  padding-top: 2rem;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

export const StyledStats = styled.span`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  font-size: 1rem;
`;

export const StyledStatsIndex = styled.span`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

export const StyledStatsItem = styled.span`
  flex: 2;
  margin-left: 3rem;
`;
