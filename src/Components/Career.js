import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "./subComponents/Card";
import Fade from "react-reveal/Fade";

const Carrer = ({ data, theme }) => {
  const { title } = theme;
  const { jobs, projects } = data;
  return (
    <div style={{ margin: "30px" }} className="projects">
      <div className="professionalCarrer">
        <Typography component="div">
          <div>
            <Typography variant="h4" style={title}>
              Professional career
            </Typography>
            <MediaCard projects={jobs} theme={theme} hasHeader={true} />
          </div>
        </Typography>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4" style={title}>
          Projects
          <Fade>
            <MediaCard projects={projects} theme={theme} hasHeader={false} />
          </Fade>
        </Typography>
      </div>
    </div>
  );
};

export default Carrer;
