import React from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";

const LoginForm = () => {
  return (
    <Grid container spacing={3} className="login-form">
      <Grid item xs={12}>
        <Typography variant="h5">Iniciar sesión</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="login-form__field"
          id="outlined-basic"
          label="Correo electrónico"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="login-form__field"
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button className="primary-btn" variant="contained">
          Iniciar sesión
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
