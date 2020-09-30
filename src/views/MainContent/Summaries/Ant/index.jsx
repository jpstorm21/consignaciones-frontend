/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SummaryPlot from '../SummaryPlot';

const Ant = ({ data, sizes }) => {
  const {
    vigentesant,
    vencidosant,
    porVencerant,
    sinasignarant,
    operacionalesant,
    insumosant,
    montosinasignarant,
    montooperacionalant,
    montoinsumosant,
    materialesconsignadosant,
    materialesporvencerant,
  } = data;
  const characteristicPlot = [
    {
      name: 'Tipo de Contrato',
      operacionales: operacionalesant,
      insumos: insumosant,
      'no asignados': sinasignarant,
    },
  ];
  const contractsTypePlot = [
    {
      name: 'Contratos',
      Vigentes: vigentesant,
      Vencidos: vencidosant,
      'Por vencer': porVencerant,
    },
  ];
  const usdPlot = [
    {
      name: 'Monto USD',
      operacionales: montooperacionalant,
      insumos: montoinsumosant,
      'no asignados': montosinasignarant,
    },
  ];
  const materialPlot = [
    {
      name: 'Materiales',
      consignados: materialesconsignadosant,
      'por vencer': materialesporvencerant,
    },
  ];
  return (
    <>
      <h1>Minera Antucoya</h1>
      <SummaryPlot
        sizes={sizes}
        characteristicPlot={characteristicPlot}
        contractsTypePlot={contractsTypePlot}
        usdPlot={usdPlot}
        materialPlot={materialPlot}
        data={{
          vencidos: vencidosant,
          vigentes: vigentesant,
          porVencer: porVencerant,
        }}
      />
    </>
  );
};

Ant.prototype = {
  data: PropTypes.object.isRequired,
};

export default Ant;
