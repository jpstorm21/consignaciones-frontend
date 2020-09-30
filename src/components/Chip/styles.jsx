import styled from 'styled-components';

export const StyledChip = styled.span`
  color: white;
  display: flex;
  border-radius: 64px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: ${({ color }) => {
    switch (color) {
      case 'red':
        return '#f44336';
      case 'green':
        return '#4caf50';
      case 'yellow':
        return '#ffd600';
      default:
        return '#9e9e9e';
    }
  }};
  justify-content: center;
  text-transform: uppercase;
`;
