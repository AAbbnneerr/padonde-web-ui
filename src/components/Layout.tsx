import React from "react";
import { Container } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      style={{ display: "flex", flex: 1, height: "100vmin" }}
    >
      <Container
        sx={{
          height: "100%",
          overflowX: "scroll",
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default Layout;
