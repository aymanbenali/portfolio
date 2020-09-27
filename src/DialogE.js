import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import { generateChips } from './home.js';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import theme from './theme'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class DialogLog extends React.Component {
  render() {
    const {state, handle, data, screenSize} = this.props;
    console.log(screenSize)
    const { description, name, images, technologies } = data;
    if (!description) return <div></div>;
    const descriptions = description.split('.');
    descriptions.pop();
    const imgSize = screenSize.width > 1246 ? 300 : 280

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
                {name}
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{
              borderStyle: 'solid',
              borderColor: '#7510F7',
              borderRadius: '25px',
              marginTop: '100px',
              marginLeft: '20px',
              marginRight: '20px',
              padding: '30px'
            }}>
            <Grid container direction={screenSize.width < 1246 ? "column" : ''} justify="center" alignItems="stretch" >
              <Grid item xs={3}>
                <img alt="complex" src={images[0]} width={imgSize} height='200' />
              </Grid>
              <Grid item>
                <Typography style={theme.palette.typographyWhiteColor}> {name} </Typography>
                <Container maxWidth="la">
                  {
                    descriptions.map(description => <Typography style={theme.palette.typographyWhiteColor}> ✓{description}. </Typography>)
                  }
                </Container>
              </Grid>
            </Grid>
            <br />
            {generateChips(technologies)}
          </div>          
        </div>
      </Dialog>
    )
  }
}