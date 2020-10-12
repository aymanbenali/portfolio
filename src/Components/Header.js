import React from "react";
import DialogContact from "./subComponents/DialogContact";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import pdf from "../data/Ayman_CV_Eng.pdf";
const Header = ({ theme }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <DialogContact state={open} handle={handleClose} titleTheme={theme} />
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            style={{
              borderStyle: "dotted",
              borderWidth: "5px",
              borderRadius: "25px",
            }}
            href={pdf}
          >
            Resume
          </Button>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            style={{
              borderStyle: "dotted",
              borderWidth: "5px",
              borderRadius: "25px",
            }}
            onClick={handleClickOpen}
          >
            Say Hello
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
