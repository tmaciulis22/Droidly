import { Grid, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react';
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
    accept: { 'application/xml': ['.xml'] }
  });

  return (
    <Grid container {...getRootProps({
      padding: '5rem',
      border: '2px dashed',
      borderColor: isDragAccept ? '#00e676' : isDragReject ? '#ff1744' : '#8c8c8c',
      borderRadius: '4px',
      backgroundColor: isDragAccept ? '#00e67650' : isDragReject ? '#ff174450' : '#fafafa',
      color: '#8c8c8c',
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
