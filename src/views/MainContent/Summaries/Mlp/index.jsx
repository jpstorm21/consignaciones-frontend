/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SummaryPlot from '../SummaryPlot';

const Mlp = ({ data, sizes }) => {
  const {
    vigentesmlp,
    vencidosmlp,
    porVencermlp,
    sinasignarmlp,
    operacionalesmlp,
    insumosmlp,
    montosinasignarmlp,
    montooperacionalmlp,
    montoinsumosmlp,
    materialesconsignadosmlp,
    materialesporvencermlp,
  } = data;
  const characteristicPlot = [
    {
      name: 'Tipo de Contrato',
      operacionales: operacionalesmlp,
      insumos: insumosmlp,
      'no asignados': sinasignarmlp,
    },
  ];
  const contractsTypePlot = [
    {
      name: 'Contratos',
      Vigentes: vigentesmlp,
      Vencidos: vencidosmlp,
      'Por vencer': porVencermlp,
    },
  ];
  const usdPlot = [
    {
      name: 'Monto USD',
      operacionales: montooperacionalmlp,
      insumos: montoinsumosmlp,
      'no asignados': montosinasignarmlp,
    },
  ];
  const materialPlot = [
    {
      name: 'Materiales',
      consignados: materialesconsignadosmlp,
      'por vencer': materialesporvencermlp,
    },
  ];
  return (
    <>
      <h1>Minera los Pelambres</h1>
      <SummaryPlot
        sizes={sizes}
        characteristicPlot={characteristicPlot}
        contractsTypePlot={contractsTypePlot}
        usdPlot={usdPlot}
        materialPlot={materialPlot}
        data={{
          vencidos: vencidosmlp,
          vigentes: vigentesmlp,
          porVencer: porVencermlp,
        }}
      />
    </>
  );
};

Mlp.prototype = {
  data: PropTypes.object.isRequired,
  sizes: PropTypes.object.isRequired,
};

export default Mlp;
