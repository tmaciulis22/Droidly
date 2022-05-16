import { AppBar, Grid, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export default function OnboardingPage() {
  return (
    <Grid container direction='column'>
      <Grid item style={{ width: '100%' }}>
        <AppBar style={{ backgroundColor: '#f5f6fa' }} elevation={1}>
          <Toolbar>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Grid item ml='0.5rem'>
                <Typography style={{ color: "#2ecc71" }} variant='h3'>
                  Droidly
                </Typography>
              </Grid>
              <Grid item mr='0.5rem'>
                <Button variant='contained' color='success'>
                  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/builder">Start building</Link>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  )
}
