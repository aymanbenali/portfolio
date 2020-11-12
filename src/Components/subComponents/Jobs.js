import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ChipsGenerator from "./Chips";

const Jobs = (props) => {
  const { jobs, theme } = props || [];
  const { typographyWhiteColor, typographyGreyColor } = theme;
  return jobs.map((job) => {
    const { projects, company, time, position } = job;
    return (
      <div className="jobs">
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={4}>
            <Typography variant="h5">{company}</Typography>
          </Grid>
          <Grid item xs={7} />
          <Grid item xs={1}>
            <Typography variant="h7" style={typographyGreyColor}>
              {time}
            </Typography>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="stretch"
            direction="column"
          >
            <Typography variant="h7" style={{ marginLeft: "20px" }}>
              {position}
            </Typography>
            {projects.map((project) => {
              const { description } = project;
              return (
                <div>
                  {description.map((desc) => {
                    return (
                      <div style={theme.jobs.mask}>
                        <Typography style={typographyGreyColor} variant="h6">
                          ✓{desc}
                        </Typography>
                      </div>
                    );
                  })}
                  <ChipsGenerator
                    chips={project.technologies}
                    withTitle={false}
                    theme={theme}
                  />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  });
};

export default Jobs;
