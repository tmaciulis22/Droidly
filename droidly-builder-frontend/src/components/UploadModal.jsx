import React from "react";
import { Modal, Typography, Button, Grid, Paper } from "@mui/material";
import StyledDropzone from "./StyledDropzone";

export default function UploadModal({
  show,
  onClose,
  onUpload
}) {

  const handleClose = () => {
    onClose()
  }

  const handleAdd = (xmlFile) => {
    onUpload(xmlFile[0])
  }

  return (
    <Modal
      open={show}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3}>
        <Grid container direction='column' spacing={2} sx={{ p: 2 }}>
          <Grid item>
            <Typography variant="h4">
              Upload XML
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledDropzone onAdd={handleAdd} />
          </Grid>
          <Grid item>
          </Grid>
          <Grid item container justifyContent={'flex-end'}>
            <Grid item>
              <Button
                variant='outlined'
                sx={{ color: '#000000' }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}
