import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app-nav-bar">
        <Toolbar variant="dense" className="app-nav-bar__tool-bar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            pa'donde
          </Typography>

          <Typography
            variant="subtitle2"
            component={Link}
            className="app-nav-bar__tool-bar__login-btn link-btn"
            onClick={() => {
              navigate("login");
            }}
          >
            Iniciar Sesión
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
