import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  CartesianGrid,
} from 'recharts';
import { VS } from './styles';

const formatNumber = (value) => {
  const fValue = `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);

  return fValue;
};

const Stock = ({ stockUSD, ownStockUSD, stockUnit, ownStockUnit }) => {
  return (
    <VS>
      <BarChart
        width={400}
        height={300}
        data={[
          {
            name: 'Stock Unitario',
            propio: ownStockUnit,
            consignado: stockUnit,
          },
        ]}
        margin={{
          top: 20,
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
        <Bar dataKey="consignado" stackId="a" fill="#82ca9d" />
        <Bar dataKey="propio" stackId="a" fill="#ff5722" />
      </BarChart>
      <BarChart
        width={400}
        height={300}
        data={[
          {
            name: 'Stock USD',
            propio: ownStockUSD,
            consignado: stockUSD,
          },
        ]}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `$${formatNumber(value)}`} />
        <Legend />
        <Bar dataKey="consignado" stackId="a" fill="#82ca9d" />
        <Bar dataKey="propio" stackId="a" fill="#ff5722" />
      </BarChart>
    </VS>
  );
};

Stock.propTypes = {
  stockUSD: PropTypes.number.isRequired,
  ownStockUSD: PropTypes.number.isRequired,
  stockUnit: PropTypes.number.isRequired,
  ownStockUnit: PropTypes.number.isRequired,
};

export default Stock;
