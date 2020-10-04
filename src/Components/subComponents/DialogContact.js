import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogContact = (props) => {
  const {state, handle, titleTheme} = props; 
  return (
    <Dialog
      fullScreen
      open={state}
      onClose={handle}
      TransitionComponent={Transition}
    >
      <div style={{backgroundColor: '#FFFFFF'}}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handle} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              Contact me
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
            marginTop: '100px',
            marginLeft: '20px',
            marginRight: '20px',
            padding: '30px'
          }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h3' style={titleTheme}> Thanks for taking the time to reach out. How can I help you today?</Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3}>
              <TextField 
                id="outlined-secondary"
                variant="outlined"
                label="Name" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-secondary"
                variant="outlined"
                label="Email" />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3} />
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={14}
                style={{width: '226%'}}
                variant="outlined"
              />
            </Grid>
            <Grid container justify="center" alignItems="stretch" >
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{borderStyle: 'dotted', borderWidth: '5px', borderRadius: '25px'}}
                >
                  Submit
                </Button> 
              </Grid>
            </Grid>
          </Grid>
          <br />
        </div>          
      </div>
    </Dialog>
  )
};

export default DialogContact;
