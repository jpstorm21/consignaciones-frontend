import React from 'react';
import PropTypes from 'prop-types';
import { StyledStats, StyledStatsItem, StyledStatsIndex } from './styles';

const NumericStats = ({ closeToExpire, materialTypes, ownStockUSD }) => {
  return (
    <StyledStats>
      <StyledStatsIndex>
        <StyledStatsItem>
          <h3>Contratos por vencer: </h3>
        </StyledStatsItem>
        <StyledStatsItem>{closeToExpire}</StyledStatsItem>
      </StyledStatsIndex>
      <StyledStatsIndex>
        <StyledStatsItem>
          <h3>Tipos de materiales: </h3>
        </StyledStatsItem>
        <StyledStatsItem>{materialTypes}</StyledStatsItem>
      </StyledStatsIndex>
      <StyledStatsIndex>
        <StyledStatsItem>
          <h3>USD en stock propio: </h3>
        </StyledStatsItem>
        <StyledStatsItem>{ownStockUSD}</StyledStatsItem>
      </StyledStatsIndex>
    </StyledStats>
  );
};

NumericStats.propTypes = {
  closeToExpire: PropTypes.number.isRequired,
  materialTypes: PropTypes.string.isRequired,
  ownStockUSD: PropTypes.string.isRequired,
};

export default NumericStats;
