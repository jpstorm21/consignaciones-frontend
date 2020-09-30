import React, { useContext } from 'react';
import { MaterialsListContext } from '../../stores';
import { Table } from '../../components';

const MaterialList = () => {
  const { faena, columns, data, contract } = useContext(MaterialsListContext);
  const title =
    contract === 'contrato'
      ? `Materiales ${faena.charAt(0).toUpperCase()}${faena.slice(1)}`
      : `Materiales del Contrato : ${contract}`;

  return (
    <>
      <Table
        columns={columns}
        data={data}
        title={title}
        defaultNumberOfRows={5}
        canExport
        canExportAllData
        withGrouping
        isDraggable
        canFilter
      />
    </>
  );
};

export default MaterialList;
