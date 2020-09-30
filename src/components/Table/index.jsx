import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import esLocale from 'date-fns/locale/es';

const Table = ({
  columns,
  data,
  title,
  defaultNumberOfRows,
  rowHeight,
  cellEditable,
  canExportAllData,
  canExport,
  canFilter,
  filter,
  isDraggable,
  withGrouping,
  actions,
}) => {
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    const newTableColumns = columns.map((column, index) => {
      if (!filter[index]) return column;
      return {
        ...column,
        tableData: { ...column.tableData, filterValue: filter[index] },
      };
    });
    setTableColumns([...newTableColumns]);
  }, [title, columns, filter]);

  return (
    <MaterialTable
      columns={tableColumns}
      data={data}
      title={<h1>{title}</h1>}
      actions={actions}
      options={{
        exportButton: canExport,
        pageSize: defaultNumberOfRows,
        draggable: isDraggable,
        grouping: withGrouping,
        exportAllData: canExportAllData,
        exportFileName: title,
        filtering: canFilter,
        actionsColumnIndex: -1,
        emptyRowsWhenPaging: false,
        rowStyle: {
          height: rowHeight,
        },
        headerStyle: {
          fontWeight: 700,
        },
      }}
      cellEditable={cellEditable}
      localization={{
        body: {
          emptyDataSourceMessage: 'No hay datos disponibles.',
          dateTimePickerLocalization: esLocale,
        },
        header: {
          actions: 'Acciones',
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'Filas',
          labelRowsPerPage: 'Filas por página:',
          firstAriaLabel: 'Primera página',
          firstTooltip: 'Primera página',
          previousAriaLabel: 'Página anterior',
          previousTooltip: 'Página anterior',
          nextAriaLabel: 'Página siguiente',
          nextTooltip: 'Página siguiente',
          lastAriaLabel: 'Última página',
          lastTooltip: 'Última página',
        },
        toolbar: {
          addRemoveColumns: 'Agregar o eliminar columnas',
          nRowsSelected: '{0} registro(s) seleccionado(s)',
          showColumnsTitle: 'Mostrar columnas',
          showColumnsAriaLabel: 'Mostrar columnas',
          exportTitle: 'Exportar',
          exportAriaLabel: 'Exportar',
          exportName: 'Exportar como CSV',
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar',
        },
        grouping: {
          placeholder: 'Arrastra cabeceras aquí, para agruparlas.',
          groupedBy: 'Agrupado por: ',
        },
      }}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  defaultNumberOfRows: PropTypes.number,
  cellEditable: PropTypes.shape({
    onCellEditApproved: PropTypes.func,
  }),
  rowHeight: PropTypes.string,
  canExport: PropTypes.bool,
  canExportAllData: PropTypes.bool,
  canFilter: PropTypes.bool,
  filter: PropTypes.objectOf(PropTypes.array),
  isDraggable: PropTypes.bool,
  withGrouping: PropTypes.bool,
};

Table.defaultProps = {
  title: '',
  defaultNumberOfRows: 5,
  cellEditable: null,
  rowHeight: '84px',
  canExport: false,
  canExportAllData: false,
  canFilter: false,
  filter: {},
  isDraggable: false,
  withGrouping: false,
  actions: [],
};

export default Table;
