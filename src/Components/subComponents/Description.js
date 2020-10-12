import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";

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
      <div class="divImg">
        <img src={MyPhoto} alt="avatar" class="responsive" />
      </div>
      <div class="divDesc">
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
      </div>
    </div>
  );
};

export default MyDescription;
