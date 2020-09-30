import React, { useContext, useState } from 'react';
import { Edit, Clear, Check } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { StyleButton, StyleButtonRight } from './styles';
import { UserListContext } from '../../stores';
import { Table, LoadingSnackbar } from '../../components';
import { Modal, AlertDialog } from './Modal';

const AdminUsers = () => {
  const { users, newUser, editUser, changeState } = useContext(UserListContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setSelectedRowData(null);
    setEdit(false);
  };

  const handleCloseAletDialog = () => {
    setOpenAlertDialog(false);
  };

  const columns = [
    { title: 'Nombre Completo', field: 'name' },
    { title: 'Correo Electrónico', field: 'email' },
    { title: 'Cargo', field: 'position' },
    { title: 'Faena', field: 'center' },
  ];

  const handleSummit = async (data, valid) => {
    if (valid) {
      const loadingSnackbar = enqueueSnackbar(
        edit ? 'Actualizando...' : 'Registrando...',
        {
          variant: 'default',
          persist: true,
          content: (key, message) => (
            <LoadingSnackbar id={key} message={message} />
          ),
        }
      );

      const { msg, state } = edit ? await editUser(data) : await newUser(data);

      closeSnackbar(loadingSnackbar);

      enqueueSnackbar(msg, {
        variant: state ? 'default' : 'error',
      });
      handleClose();
    } else {
      enqueueSnackbar('Error, Algunos campos se encuentran vacios', {
        variant: 'error',
      });
    }
  };

  const handleState = async (email) => {
    handleCloseAletDialog();
    const loadingSnackbar = enqueueSnackbar('Cambiando estado...', {
      variant: 'default',
      persist: true,
      content: (key, message) => <LoadingSnackbar id={key} message={message} />,
    });

    const { msg, state } = await changeState(email);
    closeSnackbar(loadingSnackbar);

    enqueueSnackbar(msg, {
      variant: state ? 'default' : 'error',
    });
  };

  const actions = [
    {
      icon: (key) => (
        <StyleButton
          key={key}
          color="primary"
          variant="contained"
          startIcon={<Edit />}
          size="medium"
        >
          Editar
        </StyleButton>
      ),
      onClick: (event, rowData) => {
        setSelectedRowData(rowData);
        setEdit(true);
        setOpen(true);
      },
    },
    (data) => ({
      icon: (key) => (
        <StyleButtonRight
          key={key}
          color="secondary"
          variant="contained"
          startIcon={data.state ? <Clear /> : <Check />}
          size="medium"
        >
          {data.state ? 'Bloquear' : 'Desbloquear'}
        </StyleButtonRight>
      ),
      onClick: (event, rowData) => {
        setOpenAlertDialog(true);
        setSelectedRowData(rowData);
      },
    }),
    {
      icon: 'add',
      isFreeAction: true,
      onClick: () => setOpen(true),
    },
  ];

  return (
    <>
      <Table
        title="Administración de Usuarios"
        columns={columns}
        data={users}
        actions={actions}
      />
      <Modal
        open={open}
        submit={handleSummit}
        handleClose={handleClose}
        edit={edit}
        currentData={selectedRowData}
      />
      <AlertDialog
        open={openAlertDialog}
        currentData={selectedRowData}
        handleClose={handleCloseAletDialog}
        submit={handleState}
      />
    </>
  );
};

export default AdminUsers;
