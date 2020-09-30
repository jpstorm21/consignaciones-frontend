/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SummaryPlot from '../SummaryPlot';

const Cen = ({ data, sizes }) => {
  const {
    vigentescen,
    vencidoscen,
    porVencercen,
    sinasignarcen,
    operacionalescen,
    insumoscen,
    montosinasignarcen,
    montooperacionalcen,
    montoinsumoscen,
    materialesconsignadoscen,
    materialesporvencercen,
  } = data;
  const characteristicPlot = [
    {
      name: 'Tipo de Contrato',
      operacionales: operacionalescen,
      insumos: insumoscen,
      'no asignados': sinasignarcen,
    },
  ];
  const contractsTypePlot = [
    {
      name: 'Contratos',
      Vigentes: vigentescen,
      Vencidos: vencidoscen,
      'Por vencer': porVencercen,
    },
  ];
  const usdPlot = [
    {
      name: 'Monto USD',
      operacionales: montooperacionalcen,
      insumos: montoinsumoscen,
      'no asignados': montosinasignarcen,
    },
  ];
  const materialPlot = [
    {
      name: 'Materiales',
      consignados: materialesconsignadoscen,
      'por vencer': materialesporvencercen,
    },
  ];
  return (
    <>
      <h1>Minera Centinela</h1>
      <SummaryPlot
        sizes={sizes}
        characteristicPlot={characteristicPlot}
        contractsTypePlot={contractsTypePlot}
        usdPlot={usdPlot}
        materialPlot={materialPlot}
        data={{
          vencidos: vencidoscen,
          vigentes: vigentescen,
          porVencer: porVencercen,
        }}
      />
    </>
  );
};

Cen.prototype = {
  data: PropTypes.object.isRequired,
};

export default Cen;
