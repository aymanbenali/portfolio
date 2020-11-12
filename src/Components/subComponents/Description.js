import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";

import Technologies from "./Technologies";
import MyPhoto from "../../images/Ayman.png";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

const MyDescription = ({ data, theme }) => {
  const { description, technologies } = data;
  const myDescription = description.split(".");
  const { text } = theme.description;
  myDescription.pop();
  return (
    <div class="description">
      <Fade left cascade>
        <img src={MyPhoto} alt="avatar" className="responsive" />
      </Fade>
      <div class="divDesc">
        <Fade right cascade>
          <Typography component="div" class="divTypo">
            <br />
            <Typography variant="h4" style={text}>
              <b> Hi I'm Ayman, Nice To Meet You </b>
            </Typography>
            {myDescription.map((item) => (
              <Typography style={text}> {item}. </Typography>
            ))}
            <Technologies
              theme={theme}
              technologies={technologies}
              text={"Here are some of the most technologies i work with:"}
            />
          </Typography>
        </Fade>
      </div>
    </div>
  );
};

export default MyDescription;
