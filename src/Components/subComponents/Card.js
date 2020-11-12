import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import Dialog from "./DialogProject";

const MediaCard = ({ projects, theme, hasHeader }) => {
  const { media } = theme.card;
  const [open, setOpen] = useState(false);
  const [currentData, setcurrentData] = useState(false);

  const handleClickOpen = (data) => {
    setcurrentData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Zoom>
      <Grid container class="cards">
        {projects.map((project) => {
          const {
            description,
            name,
            images,
            startingTime,
            endingTime,
            job,
          } = project;
          return (
            <Grid item>
              <Dialog
                state={open}
                handle={handleClose}
                data={currentData}
                theme={theme}
              />
              <Card class="card">
                <CardActionArea onClick={() => handleClickOpen(project)}>
                  {hasHeader && (
                    <CardHeader
                      title={job}
                      subheader={`${startingTime} - ${endingTime}`}
                    />
                  )}
                  <CardMedia
                    style={media}
                    image={images[0]}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      noWrap="true"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {name}
                    </Typography>
                    <Typography
                      noWrap="true"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Zoom>
  );
};

export default MediaCard;
