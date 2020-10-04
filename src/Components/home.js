import React, { useState, useEffect } from 'react';
import GreatThings from './GreatThings'

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Theme from './theme';
import Card from './Card';
import Footer from './Footer';
import DialogContact from './DialogContact';

import MyPhoto from "../images/Ayman.png";
import JsonData from './../data.json';

export const generateChips = (chips, withTitle, isWhite) => {
  const { withWhite, withoutWhite, div, orginize } = Theme().palette.chips
  return (
    <div style={div}>
      {withTitle ? <Typography style={Theme().palette.typographyGreyColor}> Technologies: </Typography> : ''}
      <br />
      <div>
        {
          chips.map(chip => {
            return <Chip
              avatar={
                <Avatar style={{backgroundColor: `${chip.color}`}}>
                  <p style={Theme().palette.typographyGreyColor}>{chip.name.charAt(0)}</p>
                </Avatar>
              }
              label={<p style={ isWhite ? withWhite : withoutWhite}>{chip.name}</p>}
              clickable
              style={orginize}
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
  const name = `My name is Ayman Benali`;
  return (
    <div style={Theme().palette.firestSalute}>
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
  const { grid, mask, text } = Theme().palette.description;
  myDescription.pop();
  const computerDefaultSize = 1246;
  const size = useWindowSize();
  return (
    <div>
      <Grid container direction={size.width < computerDefaultSize ? "column" : ''} justify="center" alignItems="stretch" >
        <Grid item xs={2} style={grid}>
          <ReactRoundedImage image={MyPhoto} roundedSize="5"/>
        </Grid>
        <Grid item xs={10}>
          <Typography component="div" style={mask}>
            <br />
              <Typography variant='h4' style={text}><b> Hi I'm Ayman, Nice To Meet You </b></Typography>
            { 
              myDescription.map(item => {
                return <Typography style={text}> {item}. </Typography>          
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
        <Typography style={Theme().palette.description.text}> Here are some of the most technologies i work with: </Typography>
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
              <Typography variant="h5" style={Theme().palette.typographyWhiteColor} >{job.company}</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={1}>
              <Typography variant="h7" style={Theme().palette.typographyGreyColor}>{job.time}</Typography>
            </Grid>
            <Grid container justify="center" alignItems="stretch" direction="column">
              <Typography variant="h7" style={{marginLeft: '20px'}}>{job.position}</Typography>
              {
                projects.map(project => {
                  const { description } = project;
                  return (
                    <div>
                      {description.map(desc => {
                          return (
                            <div style={Theme().palette.jobs.mask}>
                                <Typography style={Theme().palette.typographyGreyColor} variant="h6">✓{desc}</Typography>
                            </div>
                          )
                        })}
                       {generateChips(project.technologies, false)} 
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
  console.log(Theme())
  if (Theme()) return (
    <div>
      <Container maxWidth="la">
        <MuiThemeProvider>
          <Header />
          <FirstSalute />
          <MyDescription />
          <br /><br />
          <Typography component="div" style={Theme().palette.mask}>
            <div style={{margin: '25px'}}>
              <Typography variant="h4" style={Theme().palette.title}>
                Professional career
              </Typography>
              <Jobs />              
            </div>
          </Typography>
            <br />
          <Typography variant="h4" style={Theme().palette.title}>
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
