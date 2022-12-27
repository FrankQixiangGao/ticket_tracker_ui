import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose price ranges
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="targetPrice"
            label="Target Price"
            fullWidth
            autoComplete="100"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="highestPrice"
            label="Highest Tolerance Price"
            fullWidth
            autoComplete="100"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="Latest Day to Buy"
            label="Latest Day to Buy"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}