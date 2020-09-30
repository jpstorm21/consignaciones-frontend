import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  MenuItem,
} from '@material-ui/core/';
import isEmpty from 'is-empty';
import {
  StyleButton,
  FormContainer,
  StyleTextfield,
  RowContainer,
} from './styles';

export const AlertDialog = ({ open, handleClose, submit, currentData }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Bloqueo/Desbloqueo de usuario.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Una vez que un usuario es bloqueado, este no podra acceder a la
            plataforma, en el caso contrario podra acceder, presione
            &quot;aceptar&quot; para confirmar, o cancelar para salir
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="sencondary">
            Cancelar
          </Button>
          <Button
            onClick={() => submit(currentData.email)}
            color="primary"
            autoFocus
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const Modal = ({ open, handleClose, submit, edit, currentData }) => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    position: '',
    center: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
    position: '',
    center: '',
  });

  useEffect(() => {
    if (currentData) setData(currentData);
    else {
      setData({
        email: '',
        name: '',
        password: '',
        position: '',
        center: '',
      });
      setErrors({
        email: '',
        name: '',
        password: '',
        position: '',
        center: '',
      });
    }
  }, [currentData, open]);

  const handleChange = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true;
    const errorsForm = {};
    const regExp = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (isEmpty(data.email) || !regExp.test(data.email)) {
      valid = false;
      errorsForm.email = 'Ingrese un email valido';
    }
    if (isEmpty(data.name)) {
      valid = false;
      errorsForm.name = 'Ingrese un nombre';
    }
    if (isEmpty(data.position)) {
      valid = false;
      errorsForm.position = 'Ingrese un cargo';
    }
    if (isEmpty(data.center)) {
      valid = false;
      errorsForm.center = 'Ingrese una faena';
    }
    if (!edit) {
      if (isEmpty(data.password)) {
        valid = false;
        errorsForm.password = 'Ingrese una contraseña';
      }
    }
    setErrors(errorsForm);
    submit(data, valid);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        {edit ? 'Edición de Usuario' : 'Registro de Usuario'}
      </DialogTitle>
      <DialogContent>
        <FormContainer>
          <RowContainer>
            <StyleTextfield
              label="Email"
              value={data.email}
              helperText={errors.email}
              error={!isEmpty(errors.email)}
              name="email"
              onChange={handleChange}
              disabled={edit}
            />
            <StyleTextfield
              label="Nombre"
              value={data.name}
              helperText={errors.name}
              error={!isEmpty(errors.name)}
              name="name"
              onChange={handleChange}
            />
          </RowContainer>
          <RowContainer>
            <StyleTextfield
              label="Cargo"
              value={data.position}
              helperText={errors.position}
              error={!isEmpty(errors.position)}
              name="position"
              onChange={handleChange}
              select
            >
              <MenuItem key={1} value="Administrador">
                Administrador
              </MenuItem>
              <MenuItem key={2} value="General">
                General
              </MenuItem>
            </StyleTextfield>
            <StyleTextfield
              label="Faena"
              value={data.center}
              helperText={errors.center}
              error={!isEmpty(errors.center)}
              name="center"
              onChange={handleChange}
              select
            >
              <MenuItem key={1} value="Pelambres">
                Pelambres
              </MenuItem>
              <MenuItem key={2} value="Centinela">
                Centinela
              </MenuItem>
              <MenuItem key={4} value="Antucoya">
                Antucoya
              </MenuItem>
              <MenuItem key={4} value="Zaldívar">
                Zaldívar
              </MenuItem>
              <MenuItem key={5} value="Amsa">
                Amsa
              </MenuItem>
            </StyleTextfield>
          </RowContainer>
          {!edit && (
            <RowContainer>
              <StyleTextfield
                label="Contraseña"
                value={data.password}
                helperText={errors.password}
                error={!isEmpty(errors.password)}
                name="password"
                type="password"
                onChange={handleChange}
                fullWidth
              />
            </RowContainer>
          )}
        </FormContainer>
      </DialogContent>
      <DialogActions>
        <StyleButton
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Cancelar
        </StyleButton>
        <StyleButton onClick={handleSubmit} variant="contained" color="primary">
          {edit ? 'Actualizar Usuario' : 'Registrar Usuario'}
        </StyleButton>
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Modal;
