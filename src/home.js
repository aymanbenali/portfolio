import React, { useState, useEffect } from 'react';
import { GreatThings } from 'moving-letters'

import { useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import theme from './theme';
import Card from './Card';
import Footer from './Footer';
import DialogContact from './DialogContact';

import MyPhoto from "./images/Ayman.png";
import './App.css';
import JsonData from './data.json';

export const generateChips = (chips, withTitle, isWhite) => {
  return (
    <div style={{marginLeft: '20px'}}>
      {withTitle ? <Typography style={theme.palette.typographyGreyColor}> Technologies: </Typography> : ''}
      <br />
      <div>
        {
          chips.map(chip => {
            return <Chip
              avatar={
                <Avatar style={{backgroundColor: `${chip.color}`}}>
                  <p style={theme.palette.typographyGreyColor}>{chip.name.charAt(0)}</p>
                </Avatar>
              }
              label={<p style={{color: isWhite ? '#FFFFFF': '#141C3A'}}>{chip.name}</p>}
              clickable
              style={{margin: theme.spacing(0.5), color:'#FFFFFF'}}
              variant="outlined"
            />
          })
        }        
      </div>
    </div>
  )
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const FirstSalute = () => {
  const theme = useTheme();
  const name = `My name is Ayman Benali`;
  return (
    <div style={{color: '#7510F7'}} >
      <Grid container direction="column" justify="center" alignItems="stretch" >
        <section>
          <GreatThings text='Hello World 👋,' />
          <GreatThings text={name} />
          <GreatThings text='Data Scientist Jr & Full Stack Web Developer.' />
        </section>
      </Grid>
    </div>
  );
};

const MyDescription = () => {
  const myDescription = JsonData.about.description.split('.');
  myDescription.pop();
  const size = useWindowSize();
  return (
    <div>
      <Grid container direction={size.width < 1246 ? "column" : ''} justify="center" alignItems="stretch" >
        <Grid item xs={2} style={size.width < 1246 ? {margin: '20%'} : {marginTop: '7%'}}>
          <ReactRoundedImage image={MyPhoto} roundedSize="5"/>
        </Grid>
        <Grid item xs={10}>
          <Typography component="div" style={{
            backgroundColor: '#7510F7',
            height: '105%',
            borderRadius: '25px',
            width: size.width < 1246 ? '120%' : 'auto'
          }}>
            <br />
              <Typography variant='h4' style={theme.palette.descriptionText}><b> Hi I'm Ayman, Nice To Meet You </b></Typography>
            { 
              myDescription.map(item => {
                return <Typography style={theme.palette.descriptionText}> {item}. </Typography>          
              })
            }
            <Technologies />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const Technologies = () => {
  const technologies = JsonData.about.technologies;
  return (
    <div>
      <grid container direction="column" justify="center" alignItems="stretch">
        <Typography style={theme.palette.descriptionText}> here are some of the most technologies i work with: </Typography>
        {generateChips(technologies, false, true)}
      </grid>
    </div>
  )
}

const Jobs = () => {
  const jobs = JsonData.jobs;
  return (
    jobs.map(job => {
    const { projects } = job;
      return (
        <div>
        <br /><br />
          <Grid container justify="center" alignItems="stretch" >
            <Grid item xs={4}>
              <Typography variant="h5" style={theme.palette.typographyWhiteColor} >{job.company}</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={1}>
              <Typography variant="h7" style={theme.palette.typographyGreyColor}>{job.time}</Typography>
            </Grid>
            <Grid container justify="center" alignItems="stretch" direction="column">
              <Typography variant="h7" style={{marginLeft: '20px'}}>{job.position}</Typography>
              {
                projects.map(project => {
                  const { description } = project;
                  console.log(description);
                  return (
                    <div>
                      {description.map(desc => {
                          return (
                            <div style={{borderStyle: 'solid', borderColor: '#141C3A', borderRadius: '25px', margin: '20px', padding: '20px'}}>
                                <Typography style={theme.palette.typographyGreyColor} variant="h6">✓{desc}</Typography>
                            </div>
                          )
                        })}
                       {generateChips(project.technologies, true)} 
                    </div>
                  )

                })
              }
            </Grid>
          </Grid>
        </div>
      )
    })
  )
}

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop: '20px'}}>
      <DialogContact state={open} handle={handleClose}/>
      <Grid container justify="center" alignItems="stretch" >
        <Grid item xs={10} />
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            style={{borderStyle: 'dotted', borderWidth: '5px', borderRadius: '25px'}}
            onClick={handleClickOpen}
          >
            Say Hello
          </Button>      
        </Grid>
      </Grid>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Container maxWidth="la">
        <MuiThemeProvider theme={theme}>
          <Header />
          <FirstSalute />
          <MyDescription />
          <br /><br />
          <Typography component="div" style={{
            borderStyle: 'solid',
            borderColor: '#7510F7',
            height: '105%',
            borderRadius: '25px',
          }}>
            <div style={{margin: '25px'}}>
              <Typography variant="h4" style={theme.palette.title}>
                Professional career
              </Typography>
              <Jobs />              
            </div>
          </Typography>
            <br />
          <Typography variant="h4" style={theme.palette.title}>
            Projects
          </Typography>  
          <br />        
          <Card />
          <br />
          <Footer />
        </MuiThemeProvider>
      </Container>
    </div>
  );
}

export default App;
