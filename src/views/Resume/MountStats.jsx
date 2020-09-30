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

const MountStats = ({ contracts }) => {
  return (
    <Column>
      <h2>Stock unitario</h2>
      <BarChart
        width={800}
        height={300}
        data={[
          {
            name: contracts[0].provider,
            Propio: contracts[0].ownStockUnit,
            Consignado: contracts[0].consignedStockUnit,
          },
          {
            name: contracts[1].provider,
            Propio: contracts[1].ownStockUnit,
            Consignado: contracts[1].consignedStockUnit,
          },
          {
            name: contracts[2].provider,
            Propio: contracts[2].ownStockUnit,
            Consignado: contracts[2].consignedStockUnit,
          },
          {
            name: contracts[3].provider,
            Propio: contracts[3].ownStockUnit,
            Consignado: contracts[3].consignedStockUnit,
          },
          {
            name: contracts[4].provider,
            Propio: contracts[4].ownStockUnit,
            Consignado: contracts[4].consignedStockUnit,
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
        <Tooltip formatter={(value) => formatNumber(value)} />
        <Legend />
        <Bar dataKey="Consignado" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Propio" stackId="a" fill="#ff5722" />
      </BarChart>
    </Column>
  );
};

MountStats.propTypes = {
  contracts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MountStats;
