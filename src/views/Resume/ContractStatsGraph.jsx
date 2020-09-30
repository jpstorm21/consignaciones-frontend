import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
  BarChart,
  CartesianGrid,
} from 'recharts';
import { Row, Column, SubColumn } from './styles';

const ContractStatsGraph = ({ active, closeToExpire, expired }) => {
  return (
    <Column>
      <h2>Estado de los contratos</h2>
      <Row>
        <SubColumn>
          <span>
            <b>Activos: </b>
            {active}
          </span>
          &nbsp;
          <span>
            <b>Por vencer: </b>
            {closeToExpire}
          </span>
          &nbsp;
          <span>
            <b>Vencidos: </b>
            {expired}
          </span>
        </SubColumn>
        <BarChart
          width={600}
          height={200}
          data={[
            {
              name: '',
              Activos: active,
              'Por Vencer': closeToExpire,
              Vencidos: expired,
            },
          ]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Activos" fill="#4caf50" />
          <Bar dataKey="Por Vencer" fill="#ffc107" />
          <Bar dataKey="Vencidos" fill="#ff5722" />
        </BarChart>
      </Row>
    </Column>
  );
};

ContractStatsGraph.propTypes = {
  active: PropTypes.number.isRequired,
  closeToExpire: PropTypes.number.isRequired,
  expired: PropTypes.number.isRequired,
};

export default ContractStatsGraph;
