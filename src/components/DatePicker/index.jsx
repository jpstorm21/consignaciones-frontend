import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import {
  DatePicker as MuiDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'moment/locale/es-us';

const DatePicker = ({ value, onChange }) => {
  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale="es-us"
    >
      <MuiDatePicker
        value={value}
        format="DD-MM-YYYY"
        invalidLabel="Fecha inválida"
        todayLabel="Hoy"
        clearLabel="LIMPIAR"
        cancelLabel="CANCELAR"
        okLabel="ACEPTAR"
        ampm={false}
        clearable
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  value: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  value: moment(new Date()),
};

export default DatePicker;
