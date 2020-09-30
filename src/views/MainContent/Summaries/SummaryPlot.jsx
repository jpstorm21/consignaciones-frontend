/* eslint-disable react/prop-types */
import React from 'react';
import { Tooltip as TooltipMaterial } from '@material-ui/core';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
} from 'recharts';
import {
  ContainerPlot,
  ContainerPlotColumn,
  BoxTitle,
  Stadistic,
} from '../styles';

const SummaryPlot = ({
  data,
  sizes,
  characteristicPlot,
  contractsTypePlot,
  usdPlot,
  materialPlot,
}) => {
  const { vigentes, vencidos, porVencer } = data;
  const { contracts, contractsType, usd, materials } = sizes;
  const infoTiles = {
    contractsType:
      'Grafico que muestra por cada tipo de contrato su cantidad respectiva',
    statesContracts:
      'Grafico que muestra por cada tipo de estado su cantidad respectiva',
    usd:
      'Grafico que muestra por cada tipo de contrato su cantidad en monto USD',
    materials:
      'Grafico que muestra los materiales consignados vs los mismo, pero que estan por vencer',
  };
  const formatValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return (
    <>
      <BoxTitle>
        <h2>Contratos</h2>
      </BoxTitle>
      <BoxTitle>
        <TooltipMaterial title={<h3>Contratos que se encuentran vigentes</h3>}>
          <Stadistic style={{ color: 'green' }}>
            Vigentes:
            {vigentes}
          </Stadistic>
        </TooltipMaterial>
        <TooltipMaterial title={<h3>Contratos vencidos en el ultimo año</h3>}>
          <Stadistic style={{ color: 'red' }}>
            Vencidos:
            {vencidos}
          </Stadistic>
        </TooltipMaterial>
        <TooltipMaterial
          title={<h3>Contratos que se encuentran a 2 meses de vencer</h3>}
        >
          <Stadistic style={{ color: '#D4AC0D' }}>
            Por vencer:
            {porVencer}
          </Stadistic>
        </TooltipMaterial>
      </BoxTitle>
      <ContainerPlot>
        <ContainerPlotColumn>
          <TooltipMaterial title={<h3>{infoTiles.contractsType}</h3>}>
            <h4 style={{ textAlign: 'center', marginLeft: '70px' }}>
              Contratos por tipo
            </h4>
          </TooltipMaterial>
          <BarChart
            layout="vertical"
            width={contracts.width}
            height={contracts.height}
            data={characteristicPlot}
            margin={contracts.margin}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend align="right" />
            <Bar
              dataKey="operacionales"
              stackId="a"
              barSize={50}
              fill="#145A32"
            />
            <Bar dataKey="insumos" stackId="a" barSize={50} fill="#82ca9d" />
            <Bar
              dataKey="no asignados"
              stackId="a"
              barSize={50}
              fill="#D4AC0D"
            />
          </BarChart>
          <TooltipMaterial title={<h3>{infoTiles.statesContracts}</h3>}>
            <h4 style={{ textAlign: 'center', marginLeft: '70px' }}>
              Estado de los contratos
            </h4>
          </TooltipMaterial>
          <BarChart
            width={contractsType.width}
            height={contractsType.height}
            data={contractsTypePlot}
            margin={contractsType.margin}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Vigentes" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Por vencer" stackId="a" fill="#ffc658" />
            <Bar dataKey="Vencidos" fill="#C0392B" />
          </BarChart>
        </ContainerPlotColumn>
        <ContainerPlotColumn>
          <TooltipMaterial title={<h3>{infoTiles.usd}</h3>}>
            <h4 style={{ textAlign: 'center', marginLeft: '40px' }}>
              Monto por tipo de contrato
            </h4>
          </TooltipMaterial>
          <BarChart
            title="emm"
            width={usd.width}
            height={usd.height}
            data={usdPlot}
            margin={usd.margin}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip formatter={(value) => formatValue.format(value)} />
            <Legend align="left" />
            <Bar
              dataKey="operacionales"
              stackId="a"
              barSize={50}
              fill="#145A32"
            />
            <Bar dataKey="insumos" stackId="a" barSize={50} fill="#82ca9d" />
            <Bar
              dataKey="no asignados"
              stackId="a"
              barSize={50}
              fill="#D4AC0D"
            />
          </BarChart>
        </ContainerPlotColumn>
        <ContainerPlotColumn>
          <TooltipMaterial title={<h3>{infoTiles.materials}</h3>}>
            <h4 style={{ textAlign: 'center', marginLeft: '80px' }}>
              Materiales consignados
            </h4>
          </TooltipMaterial>
          <BarChart
            width={materials.width}
            height={materials.height}
            data={materialPlot}
            margin={materials.margin}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend align="right" />
            <Bar
              dataKey="consignados"
              stackId="a"
              barSize={50}
              fill="#82ca9d"
            />
            <Bar dataKey="por vencer" stackId="a" barSize={50} fill="#D4AC0D" />
          </BarChart>
        </ContainerPlotColumn>
      </ContainerPlot>
    </>
  );
};

export default SummaryPlot;
