import React from 'react';
import PropTypes from 'prop-types';
import { StyledStats, StatsWrapper } from './styles';

const formatNumber = (value) => {
  const fValue = `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);

  return fValue;
};

const Stats = ({
  faena,
  provider,
  contractType,
  begin,
  end,
  contractAmount,
  materialTypes,
  stockUnit,
  stockUSD,
}) => {
  return (
    <StyledStats>
      <StatsWrapper>
        <table>
          <tbody>
            <tr>
              <th className="h">Proveedor</th>
              <td>{provider}</td>
            </tr>
            <tr>
              <th className="h">Faena</th>
              <td>{`${faena.charAt(0).toUpperCase()}${faena.slice(1)}`}</td>
            </tr>
            <tr>
              <th className="h">Tipo de contrato</th>
              <td>{contractType}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="h">Validez</th>
              <td>{begin}</td>
              <td>{end}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="v">Tipos de Materiales</th>
              <th className="v">Monto de Contrato</th>
            </tr>
            <tr>
              <td className="v3">{materialTypes}</td>
              <td className="v3">{`$${formatNumber(contractAmount)}`}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="v">Stock Consignado</th>
              <th className="v">Stock USD Consignado</th>
            </tr>
            <tr>
              <td className="v3">{formatNumber(stockUnit)}</td>
              <td className="v3">{`$${formatNumber(stockUSD)}`}</td>
            </tr>
          </tbody>
        </table>
      </StatsWrapper>
    </StyledStats>
  );
};

Stats.propTypes = {
  faena: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  contractType: PropTypes.string.isRequired,
  begin: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  contractAmount: PropTypes.number.isRequired,
  materialTypes: PropTypes.number.isRequired,
  stockUnit: PropTypes.number.isRequired,
  stockUSD: PropTypes.number.isRequired,
};

export default Stats;
