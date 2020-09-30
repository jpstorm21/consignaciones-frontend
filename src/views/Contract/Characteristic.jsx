import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Planning } from './styles';

const formatNumber = (value) => {
  const fValue = `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);

  return fValue;
};

const Characteristic = ({ nd, v1, pd, vb }) => {
  return (
    <Planning>
      <BarChart
        width={500}
        height={300}
        data={[
          {
            name: 'ND',
            'Característica de planificación': nd || 0,
          },
          {
            name: 'V1',
            'Característica de planificación': v1 || 0,
          },
          {
            name: 'PD',
            'Característica de planificación': pd || 0,
          },
          {
            name: 'VB',
            'Característica de planificación': vb || 0,
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
        <Tooltip formatter={(value) => formatNumber(value)} />
        <Legend />
        <Bar dataKey="Característica de planificación" fill="#8884d8" />
      </BarChart>
    </Planning>
  );
};

Characteristic.propTypes = {
  nd: PropTypes.number.isRequired,
  v1: PropTypes.number.isRequired,
  pd: PropTypes.number.isRequired,
  vb: PropTypes.number.isRequired,
};

export default Characteristic;
