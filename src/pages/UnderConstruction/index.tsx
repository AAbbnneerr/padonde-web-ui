import React from "react";
import { Grid, Typography } from "@mui/material";
const building = require("../../assets/imgs/building.png");
const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <Grid container spacing={2} className="under-construction__container">
        <Grid item xs={6} className="under-construction__main-row">
          <img src={building} alt="building" width={"90%"} />
        </Grid>
        <Grid item xs={6} className="under-construction__main-row">
          <Typography variant="h2">
            Estamos preparando algo {""}
            <strong style={{ color: "#f10349" }}>delicioso </strong>🔥
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default UnderConstruction;
