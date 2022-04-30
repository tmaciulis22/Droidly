import { Grid, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

export default function StyledDropzone({ 
  onAdd
}) {
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDropAccepted: onAdd,
    maxFiles: 1,
    accept: { 'text/xml': ['.xml'] }
  });

  const backgroundAndBorderColors = useMemo(() => {
    let style = {
      borderColor: '#8c8c8c',
      backgroundColor: '#fafafa'
    }
    if (isDragAccept) {
      style = {
        borderColor: '#00e676',
        backgroundColor: '#00e67650'
      }
    }
    if (isDragReject) {
      style = {
        borderColor: '#ff1744',
        backgroundColor: '#ff174450'
      }
    }

    return style
  }, [isDragAccept, isDragReject])

  return (
    <Grid container {...getRootProps({
      padding: '5rem',
      border: '2px dashed',
      borderRadius: '4px',
      color: '#8c8c8c',
      ...backgroundAndBorderColors
     })}>
      <Grid item xs={12}>
        <input {...getInputProps()} />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6">
          Drag and drop XML file here, or click to select it from file explorer
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <CloudUploadIcon fontSize="large" />
      </Grid>
    </Grid>
  );
}
