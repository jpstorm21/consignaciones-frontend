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
import { Column } from './styles';

const formatNumber = (value) => {
  const fValue = `${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);

  return fValue;
};

const MountStatsUSD = ({ contracts }) => {
  return (
    <Column>
      <h2>Stock USD</h2>
      <BarChart
        width={800}
        height={300}
        data={[
          {
            name: contracts[0].provider,
            Propio: contracts[0].ownStockUSD,
            Consignado: contracts[0].consignedStockUSD,
          },
          {
            name: contracts[1].provider,
            Propio: contracts[1].ownStockUSD,
            Consignado: contracts[1].consignedStockUSD,
          },
          {
            name: contracts[2].provider,
            Propio: contracts[2].ownStockUSD,
            Consignado: contracts[2].consignedStockUSD,
          },
          {
            name: contracts[3].provider,
            Propio: contracts[3].ownStockUSD,
            Consignado: contracts[3].consignedStockUSD,
          },
          {
            name: contracts[4].provider,
            Propio: contracts[4].ownStockUSD,
            Consignado: contracts[4].consignedStockUSD,
          },
        ]}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `$${formatNumber(value)}`} />
        <Legend />
        <Bar dataKey="Consignado" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Propio" stackId="a" fill="#ff5722" />
      </BarChart>
    </Column>
  );
};

MountStatsUSD.propTypes = {
  contracts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MountStatsUSD;
