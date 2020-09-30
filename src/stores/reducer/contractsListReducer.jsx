/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Chip, DatePicker } from '../../components';

/* Initial State */
const ContractsListInitialState = {
  faena: 'faena',
  columns: [
    {
      title: 'Contrato',
      field: 'contract',
      grouping: false,
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Tipo de contrato',
      field: 'description',
      lookup: {
        'Sin asignar': 'S.A',
        'Consignación Operacional': 'C.O',
        'Consignación Estratégico Insumos': 'C.E.I',
      },
      filtering: true,
      filterOnItemSelect: true,
      defaultFilter: [],
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.description : rowData;
        return type === 'row' ? <span>{value}</span> : value;
      },
    },
    {
      title: 'Estado',
      field: 'status',
      lookup: {
        Vigente: 'VIGENTE',
        Vencido: 'VENCIDO',
        'Por Vencer': 'POR VENCER',
      },
      defaultFilter: ['Vigente', 'Por Vencer'],
      editable: 'never',
      filterOnItemSelect: true,
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.status : rowData;
        return type === 'row' ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 600,
            }}
          >
            <Chip
              color={(() => {
                switch (value) {
                  case 'Vigente':
                    return 'green';
                  case 'Vencido':
                    return 'red';
                  case 'Por Vencer':
                    return 'yellow';
                  default:
                    return 'gray';
                }
              })()}
            >
              {value}
            </Chip>
          </div>
        ) : (
          value
        );
      },
    },
    {
      title: 'Proveedor',
      field: 'provider',
      filtering: true,
      hideFilterIcon: true,
      editable: 'never',
    },
    {
      title: 'Fecha Inicio',
      field: 'beginDate',
      type: 'date',
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.beginDate : rowData;
        const beginDate = moment(value);

        return beginDate.isValid() ? beginDate.format('DD-MM-YYYY') : value;
      },
      filterComponent: ({ columnDef, onFilterChanged }) => {
        const { id, filterValue } = columnDef.tableData;

        const handleChange = (date) => {
          onFilterChanged(id, moment.isMoment(date) ? date.toDate() : date);
        };

        return (
          <DatePicker value={filterValue || null} onChange={handleChange} />
        );
      },
      grouping: true,
      filtering: true,
      searchable: false,
      editable: 'never',
      align: 'center',
    },
    {
      title: 'Fecha Término',
      field: 'endDate',
      type: 'date',
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.endDate : rowData;
        const endDate = moment(value);

        return endDate.isValid() ? endDate.format('DD-MM-YYYY') : value;
      },
      filterComponent: ({ columnDef, onFilterChanged }) => {
        const { id, filterValue } = columnDef.tableData;

        const handleChange = (date) => {
          onFilterChanged(id, moment.isMoment(date) ? date.toDate() : date);
        };

        return (
          <DatePicker value={filterValue || null} onChange={handleChange} />
        );
      },
      grouping: true,
      filtering: true,
      searchable: false,
      defaultSort: 'asc',
      editable: 'never',
      align: 'center',
    },
    {
      title: 'Monto (USD)',
      field: 'amount',
      type: 'currency',
      currencySetting: {
        currencyCode: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      grouping: false,
      filtering: false,
      searchable: false,
      editable: 'never',
    },
    {
      title: 'Avance Tiempo',
      field: 'timeConsuming',
      grouping: false,
      filtering: false,
      searchable: false,
      editable: 'never',
      align: 'center',
      width: 80,
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.timeConsuming : rowData;
        const timeConsuming = `${value}%`;

        return timeConsuming;
      },
    },
    {
      title: 'Consumo',
      field: 'amountConsuming',
      grouping: false,
      filtering: false,
      searchable: false,
      editable: 'never',
      align: 'center',
      width: 80,
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.amountConsuming : rowData;
        const amountConsuming = `${value}%`;

        return amountConsuming;
      },
    },
    {
      title: 'Delta',
      field: 'factor',
      grouping: false,
      filtering: false,
      searchable: false,
      editable: 'never',
      align: 'center',
      width: 80,
      render: (rowData, type) => {
        const value = type === 'row' ? rowData.factor : rowData;
        const factor = `${value}%`;

        return factor;
      },
    },
  ],
  data: [],
};

/* Methods */

/**
 *  ContractsList reducer
 * @param {object} state - local state
 * @param {String} action.type - type of action
 */
const ContractsListReducer = (state, { type, ...params }) => {
  switch (type) {
    case 'RESET': {
      return { ...ContractsListInitialState };
    }
    case 'SET_FAENA': {
      return { ...state, faena: params.payload };
    }
    case 'SET_NEW_DATA': {
      return { ...state, data: params.payload };
    }
    case 'SET_DESCRIPTION': {
      const newData = state.data.map((d) => {
        if (d.contract === params.payload.contract)
          return { ...d, description: params.payload.description };
        return d;
      });
      return { ...state, data: newData };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export { ContractsListReducer, ContractsListInitialState };
