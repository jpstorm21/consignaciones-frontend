import React, { useContext } from 'react';
import { ResumeContext } from '../../stores';
import { Row, Container } from './styles';
import ContractStatsGraph from './ContractStatsGraph';
import MountStatsUSD from './MountStatsUSD';
import NumericStats from './NumericStats';
import MountStats from './MountStats';

const Resume = () => {
  const {
    faena,
    active,
    closeToExpire,
    expired,
    materialTypes,
    ownStockUSD,
    contracts,
  } = useContext(ResumeContext);
  return (
    <>
      <h1>{`Resumen de ${faena.charAt(0).toUpperCase()}${faena.slice(1)}`}</h1>
      <Container>
        <Row>
          <ContractStatsGraph
            active={active}
            closeToExpire={closeToExpire}
            expired={expired}
          />
          <NumericStats
            closeToExpire={closeToExpire}
            materialTypes={materialTypes}
            ownStockUSD={ownStockUSD}
          />
        </Row>
        <Row>
          <MountStatsUSD contracts={contracts} />
          <MountStats contracts={contracts} />
        </Row>
      </Container>
    </>
  );
};

export default Resume;
