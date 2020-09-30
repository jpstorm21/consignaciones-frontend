import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  ListAlt as ListAltIcon,
  Details as DetailsIcon,
} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { ContractsListContext } from '../../stores';
import { StyledButton } from './styles';
import { Table } from '../../components';

const List = ({ faena, columns, data, updateDescription }) => {
  const history = useHistory();

  return (
    <>
      <Table
        columns={[...columns]}
        filter={{ 1: [] }}
        data={data}
        title={`Contratos de consignación ${faena
          .charAt(0)
          .toUpperCase()}${faena.slice(1)}`}
        cellEditable={{
          onCellEditApproved: (newValue, oldValue, rowData) => {
            return updateDescription(rowData.contract, newValue);
          },
        }}
        actions={[
          {
            icon: (prop) => (
              <StyledButton key={prop.key}>
                <Tooltip title="Ir a materiales" aria-label="Ir a materiales">
                  <ListAltIcon />
                </Tooltip>
              </StyledButton>
            ),
            onClick: (event, rowData) => {
              event.preventDefault();
              history.push(
                `/dashboard/faenas/${faena}/materiales?contrato=${rowData.contract}`
              );
            },
          },
          {
            icon: (prop) => (
              <StyledButton key={prop.key}>
                <Tooltip title="Ir a detalle" aria-label="Ir a detalle">
                  <DetailsIcon />
                </Tooltip>
              </StyledButton>
            ),
            onClick: (event, rowData) => {
              event.preventDefault();
              history.push(
                `/dashboard/faenas/${faena}/contratos/${rowData.contract}`
              );
            },
          },
        ]}
        defaultNumberOfRows={5}
        canExport
        canExportAllData
        canFilter
        withGrouping
        isDraggable
      />
    </>
  );
};

List.propTypes = {
  faena: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateDescription: PropTypes.func.isRequired,
};

const ContractsList = () => {
  const { faena, columns, data, updateDescription } = useContext(
    ContractsListContext
  );

  return (
    <List
      data={data}
      faena={faena}
      columns={columns}
      updateDescription={updateDescription}
    />
  );
};

export default ContractsList;
