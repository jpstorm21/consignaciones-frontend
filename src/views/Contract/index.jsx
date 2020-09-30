import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ListAlt as ListAltIcon } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { ContractContext } from '../../stores';
import { Container, Row, StyledButton } from './styles';
import Characteristic from './Characteristic';
import Stats from './Stats';
import Speed from './Speed';
import Stock from './Stock';

const Contract = () => {
  const {
    faena,
    contract,
    provider,
    contractType,
    begin,
    end,
    contractAmount,
    materialTypes,
    stockUSD,
    ownStockUSD,
    stockUnit,
    ownStockUnit,
    timeFactor,
    consumeFactor,
    nd,
    v1,
    pd,
    vb,
  } = useContext(ContractContext);
  const history = useHistory();

  return (
    <>
      <Row>
        <h1>{`Contrato ${contract}`}</h1>
        <StyledButton
          onClick={(event) => {
            event.preventDefault();
            history.push(
              `/dashboard/faenas/${faena}/materiales?contrato=${contract}`
            );
          }}
        >
          <Tooltip title="Ir a materiales" aria-label="Ir a materiales">
            <ListAltIcon />
          </Tooltip>
        </StyledButton>
      </Row>
      <Container>
        <Row>
          <Stats
            provider={provider}
            faena={faena}
            contractType={contractType}
            begin={begin}
            end={end}
            contractAmount={contractAmount}
            materialTypes={materialTypes}
            stockUnit={stockUnit}
            stockUSD={stockUSD}
          />
          <Speed timeFactor={timeFactor} consumeFactor={consumeFactor} />
        </Row>
        <Row>
          <Stock
            stockUSD={stockUSD}
            ownStockUSD={ownStockUSD}
            stockUnit={stockUnit}
            ownStockUnit={ownStockUnit}
          />
          <Characteristic nd={nd} v1={v1} pd={pd} vb={vb} />
        </Row>
      </Container>
    </>
  );
};

export default Contract;
