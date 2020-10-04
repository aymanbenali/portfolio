import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import quoteWhite from "../images/quoteWhite.png";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const font = "'Roboto Condensed', sans-serif";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  title: {
    fontFamily: font,
    color: "#FFFFFF",
    button: {
      textTransform: "none",
    },
    textAlign: "center",
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const generateImage = () => {
  return (
    <div style={{ marginLeft: "20%" }}>
      <img src={quoteWhite} width="70%" height="70%" alt="" />
    </div>
  );
};

const generateLiks = (classes) => {
  return (
    <div>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={3}>
          <Tooltip
            title="Github"
            aria-label="add"
            href="https://github.com/aymanbenali"
          >
            <Fab style={{ color: "#7510F7" }} className={classes.fab}>
              <GitHubIcon />
            </Fab>
          </Tooltip>
          <Tooltip
            title="Github"
            aria-label="add"
            href="https://www.linkedin.com/in/ayman-benali"
          >
            <Fab style={{ color: "#7510F7" }} className={classes.fab}>
              <LinkedInIcon />
            </Fab>
          </Tooltip>
          <Tooltip
            title="Github"
            aria-label="add"
            href="https://www.facebook.com/ayman.benali.37"
          >
            <Fab style={{ color: "#7510F7" }} className={classes.fab}>
              <FacebookIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

const Bottom = (classes) => {
  return (
    <div className={classes.title}>
      <Typography variant="h6">Ayman Benali © 2020</Typography>
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Typography
          component="div"
          style={{
            backgroundColor: "#7510F7",
            padding: "25px",
          }}
        >
          {generateImage()}
          {generateLiks(classes)}
          {Bottom(classes)}
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
