import React, { useState } from "react"
import { Modal, Typography, Button, Grid, Paper, Select, MenuItem, Stack } from "@mui/material"

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function BuildModal({
  screenOptions,
  show,
  onClose,
  onBuild
}) {
  const [startScreen, setStartScreen] = useState('')

  const handleSelection = (event) => {
    setStartScreen(event.target.value)
  }

  const getMenuItems = () => {
    return (
      screenOptions.map(screen => <MenuItem value={screen} key={screen}>{screen}</MenuItem>)
    )
  }

  const handleClose = () => {
    setStartScreen('')
    onClose()
  }

  const handleBuild = () => {
    if (startScreen) {
      onBuild(startScreen)
      handleClose()
    }
  }

  return (
    <Modal
      open={show}
      onClose={handleClose}
      sx={style}
    >
      <Paper elevation={3}>
        <Grid container direction='column' spacing={2} sx={{ p: 2 }}>
          <Grid item>
            <Typography variant="h4">
              Build app
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              In order to build your app you must pick the starting screen.
            </Typography>
          </Grid>
          <Grid item>
            <Stack spacing={1}>
              <Typography>Start screen:</Typography>
              <Select
                value={startScreen}
                onChange={handleSelection}
              >
                {getMenuItems()}
              </Select>
            </Stack>
          </Grid>
          <Grid item container spacing={2} justifyContent={'flex-end'}>
            <Grid item>
              <Button
                variant='outlined'
                sx={{ color: '#000000' }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='success'
                onClick={handleBuild}
              >
                Build
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}
