import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

import ChipsGenerator from "./Chips";
import useWindowSize from "./screenSize";

const DialogProject = (props) => {
  let descriptions;
  const { state, handle, data, theme } = props;
  const screenSize = useWindowSize();
  const { description, name, images, technologies } = data;
  if (!description) return <div></div>;
  if (Array.isArray(description)) descriptions = description;
  else {
    descriptions = description.split(".");
    descriptions.pop();
  }
  console.log(descriptions);
  const imgSize = screenSize > 1246 ? 300 : 280;

  return (
    <Modal isOpen={state} onRequestClose={handle} style={{ height: "100%" }}>
      <Zoom>
        <button className="close-modal" onClick={handle}>
          X
        </button>
        <div className="dialog">
          <div className="dialog2">
            <img alt="complex" src={images[0]} width={imgSize} height="200" />
            <div className="dialog3">
              <Typography style={theme.typographyWhiteColor}>
                {" "}
                {name}{" "}
              </Typography>
              <Container maxWidth="la">
                {descriptions.map((description) => (
                  <Typography style={theme.typographyWhiteColor}>
                    {" "}
                    ✓{description}.{" "}
                  </Typography>
                ))}
              </Container>
            </div>
          </div>
          <ChipsGenerator chips={technologies} theme={theme} />
        </div>
      </Zoom>
    </Modal>
  );
};

export default DialogProject;
