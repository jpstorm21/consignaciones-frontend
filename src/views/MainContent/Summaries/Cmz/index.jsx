/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SummaryPlot from '../SummaryPlot';

const Cmz = ({ data, sizes }) => {
  const {
    vigentescmz,
    vencidoscmz,
    porVencercmz,
    sinasignarcmz,
    operacionalescmz,
    insumoscmz,
    montosinasignarcmz,
    montooperacionalcmz,
    montoinsumoscmz,
    materialesconsignadoscmz,
    materialesporvencercmz,
  } = data;
  const characteristicPlot = [
    {
      name: 'Tipo de Contrato',
      operacionales: operacionalescmz,
      insumos: insumoscmz,
      'no asignados': sinasignarcmz,
    },
  ];
  const contractsTypePlot = [
    {
      name: 'Contratos',
      Vigentes: vigentescmz,
      Vencidos: vencidoscmz,
      'Por vencer': porVencercmz,
    },
  ];
  const usdPlot = [
    {
      name: 'Monto USD',
      operacionales: montooperacionalcmz,
      insumos: montoinsumoscmz,
      'no asignados': montosinasignarcmz,
    },
  ];
  const materialPlot = [
    {
      name: 'Materiales',
      consignados: materialesconsignadoscmz,
      'por vencer': materialesporvencercmz,
    },
  ];
  return (
    <>
      <h1>Minera Zaldívar</h1>
      <SummaryPlot
        sizes={sizes}
        characteristicPlot={characteristicPlot}
        contractsTypePlot={contractsTypePlot}
        usdPlot={usdPlot}
        materialPlot={materialPlot}
        data={{
          vencidos: vencidoscmz,
          vigentes: vigentescmz,
          porVencer: porVencercmz,
        }}
      />
    </>
  );
};

Cmz.prototype = {
  data: PropTypes.object.isRequired,
};

export default Cmz;
