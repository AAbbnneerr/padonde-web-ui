import React from "react";
import { Grid } from "@mui/material";

//Components

import LoginForm from "./components/LoginForm";
const Login = () => {
  return (
    <div className="login">
      <Grid container className="login__container">
        <Grid item xs={6} className="login__container-col-1"></Grid>
        <Grid item xs={6} className="login__container-col-2">
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
