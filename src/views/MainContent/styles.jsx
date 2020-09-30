import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RowContainer = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColContainer = styled.span`
  flex: 2;
  flex-grow: 0.48;
  margin: 2rem;
`;

export const BoxTitle = styled.span`
  display: flex;
  justify-content: center;
`;

export const Stadistic = styled.h3`
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 2rem;
`;

export const ContainerPlot = styled.span`
  display: flex;
`;

export const ContainerPlotColumn = styled.span`
  flex-direction: column;
`;
