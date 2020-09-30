import React, { useMemo, useState, useCallback, useContext } from 'react';
import {
  Divider,
  CardHeader,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { SessionContext } from '../../stores';
import { StyledModal, StyledCard, StyledClose } from './styles';
import LoadingSnackbar from '../LoadingSnackbar';
import InputFile from './inputFile';
import Button from '../Button';
import { URL } from '../../config.json';

/*
  Upload-Files Modal Component
*/
const UploadFilesModal = ({ isModalOpen, handleModalClose }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useContext(SessionContext);
  const [files, setFiles] = useState({
    'me3m.txt': null,
    'mb25_antucoya.txt': null,
    'mb25_centinela.txt': null,
    'mb25_pelambres.txt': null,
    'mb25_zaldivar.txt': null,
    'zmm_060_antucoya.txt': null,
    'zmm_060_centinela.txt': null,
    'zmm_060_pelambres.txt': null,
    'zmm_060_zaldivar.txt': null,
  });
  const [checkedFiles, setCheckedFiles] = useState([]);

  const doRequest = useCallback(
    async (fileSet) => {
      const loadingSnackbar = enqueueSnackbar('Cargando...', {
        variant: 'default',
        persist: true,
        content: (key, message) => (
          <LoadingSnackbar id={key} message={message} />
        ),
      });

      const formData = new FormData();

      Object.keys(fileSet).forEach(async (item) => {
        formData.append('files', fileSet[item][0]);
      });

      const config = {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: formData,
      };

      try {
        const rawResponse = await fetch(`${URL}/api/update-db`, config);

        if (rawResponse.status !== 200) {
          enqueueSnackbar('Error al enviar los archivos al servidor.', {
            variant: 'error',
          });
          closeSnackbar(loadingSnackbar);
          return false;
        }

        enqueueSnackbar('Base de datos actualizada con éxito.', {
          variant: 'success',
        });
        closeSnackbar(loadingSnackbar);
        handleModalClose();
        return true;
      } catch (error) {
        closeSnackbar(loadingSnackbar);
        enqueueSnackbar('Error al enviar los archivos al servidor.', {
          variant: 'error',
        });
        return false;
      }
    },
    [token, enqueueSnackbar, closeSnackbar, handleModalClose]
  );

  const handleAccept = useCallback(async () => {
    try {
      if (checkedFiles.length === 0) throw new Error('Empty');

      const itemToSend = {};

      checkedFiles.forEach((item) => {
        if (!files[item]) throw new Error('No file found');
        itemToSend[item] = files[item];
      });

      doRequest(itemToSend);
      return true;
    } catch (error) {
      const errorMsg = error.message;
      switch (errorMsg) {
        case 'No file found':
          enqueueSnackbar('Debe subir los archivos seleccionados.', {
            variant: 'error',
          });
          break;
        case 'Empty':
          enqueueSnackbar('Debe seleccionar al menos un archivo', {
            variant: 'error',
          });
          break;
        default:
          enqueueSnackbar(errorMsg, {
            variant: 'error',
          });
      }
      return false;
    }
  }, [files, checkedFiles, enqueueSnackbar, doRequest]);

  return useMemo(
    () => (
      <StyledModal
        open={isModalOpen}
        onClose={handleModalClose}
        disableAutoFocus
        disableEnforceFocus
      >
        <StyledCard>
          <CardHeader
            title="Actualizar Sistema"
            action={
              <StyledClose onClick={handleModalClose}>
                <Close />
              </StyledClose>
            }
          />
          <Divider />
          <CardContent>
            <InputFile
              fileName="ME3M.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="MB25_ANTUCOYA.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="MB25_CENTINELA.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="MB25_PELAMBRES.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="MB25_ZALDIVAR.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="ZMM_060_ANTUCOYA.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="ZMM_060_CENTINELA.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="ZMM_060_PELAMBRES.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
            <InputFile
              fileName="ZMM_060_ZALDIVAR.TXT"
              setFiles={setFiles}
              setCheckedFiles={setCheckedFiles}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleModalClose}
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleAccept}
            >
              ACEPTAR
            </Button>
          </CardActions>
        </StyledCard>
      </StyledModal>
    ),
    [isModalOpen, setCheckedFiles, handleModalClose, handleAccept]
  );
};

export default UploadFilesModal;
