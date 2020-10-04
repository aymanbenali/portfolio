import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Dialog from './DialogProject';

const MediaCard = ({ projects, theme }) => {
  const { root, grid, media } = theme;
  const [open, setOpen] = useState(false);
  const [currentData, setcurrentData] = useState(false);

  const handleClickOpen = (data) => {
    setcurrentData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Grid container>
      {projects.map(project => {
        const { description, name, images } = project;
        return(
          <Grid item style={grid}>
            <Dialog state={open} handle={handleClose} data={currentData} theme={theme}/>
            <Card style={root}>
              <CardActionArea onClick={() => handleClickOpen(project)}>
                <CardMedia
                  style={media}
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

export default MediaCard;