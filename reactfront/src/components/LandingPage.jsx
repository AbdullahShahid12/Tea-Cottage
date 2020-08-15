import React from "react";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const LandingPage = () => {
  return (
    <div>
      <img src={require("./banner.jpg")} alt="Logo" width="100%" />
    </div>
  );
};

export default LandingPage;
