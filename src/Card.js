import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from './DialogE';

import JsonData from './data.json';

const useWindowSize = () => {
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

const useStyles = makeStyles((theme) => ({
  root: {
    borderStyle: 'solid',
    borderRadius: '20px',
    borderColor: '#7510F7'
  },
  grid: {
    margin: theme.spacing(3, 4),
    maxWidth: 345
  },
  gridMobile: {
    margin: theme.spacing(3, 0),
    maxWidth: '100%',
    Width: 'auto'
  },
  media: {
    height: 140,
  },
}));



export default function MediaCard() {
  const size = useWindowSize();
  const classes = useStyles();
  const { projects } = JsonData;
  const [open, setOpen] = React.useState(false);
  const [currentData, setcurrentData] = React.useState(false);

  const handleClickOpen = (data) => {
    setcurrentData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      {projects.map(project => {
        const { description, name, images } = project;
        return(
          <Grid item className={size.width > 1246 ? classes.grid : classes.gridMobile}>
            <Dialog state={open} handle={handleClose} data={currentData} screenSize={size}/>
            <Card className={classes.root}>
              <CardActionArea onClick={() => handleClickOpen(project)}>
                <CardMedia
                  className={classes.media}
                  image={images[0]}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography noWrap='true' gutterBottom variant="h5" component="h2">
                    { name }
                  </Typography>
                  <Typography noWrap='true' variant="body2" color="textSecondary" component="p">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}