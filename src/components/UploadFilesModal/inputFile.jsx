import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Container,
  FileInputWrapper,
  FileName,
  LeftWrapper,
  RightWrapper,
} from './styles';

/*
  Upload-File Component
*/
const InputFile = ({ fileName, setFiles, setCheckedFiles }) => {
  const [checked, setChecked] = useState(false);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: '.txt',
    onDrop: (...args) => {
      const accepted = args[0];
      const rejected = args[1];
      if (rejected?.length > 0 || !accepted) return false;
      setFiles((oldFiles) => ({
        ...oldFiles,
        [fileName.toLowerCase()]: accepted,
      }));
      return true;
    },
  });

  const files = acceptedFiles.map((file) => (
    <h3 key={file.path}>{`${file.path}`}</h3>
  ));

  const handleCheck = useCallback(() => {
    setChecked((prev) => {
      setCheckedFiles((oldCheckedFiles) => {
        return !prev
          ? [...oldCheckedFiles, fileName.toLowerCase()]
          : oldCheckedFiles.filter((item) => item !== fileName.toLowerCase());
      });
      return !prev;
    });
  }, [fileName, setCheckedFiles]);

  return useMemo(
    () => (
      <FileInputWrapper>
        <LeftWrapper>
          <Checkbox checked={checked} onChange={handleCheck} />
          <FileName>{fileName}</FileName>
        </LeftWrapper>
        <RightWrapper>
          <Container
            {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
          >
            <input {...getInputProps()} />
            {acceptedFiles.length !== 0 ? (
              files
            ) : (
              <p>
                Arrastre el archivo aquí, o haga click para seleccionar el
                archivo.
              </p>
            )}
          </Container>
        </RightWrapper>
      </FileInputWrapper>
    ),
    [
      files,
      checked,
      fileName,
      isDragActive,
      isDragAccept,
      isDragReject,
      handleCheck,
      getRootProps,
      getInputProps,
      acceptedFiles.length,
    ]
  );
};

InputFile.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default InputFile;
