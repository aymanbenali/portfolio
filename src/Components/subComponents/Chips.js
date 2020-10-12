import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";

const ChipsGenerator = (props) => {
  const { chips, withTitle, isWhite, theme } = props;
  const { typographyGreyColor } = theme;
  const { withWhite, withoutWhite, div, orginize } = theme.chips;
  if (!chips) return <CircularProgress />;
  return (
    <div style={div}>
      {withTitle ? (
        <Typography style={typographyGreyColor}> Technologies: </Typography>
      ) : (
        ""
      )}
      <br />
      <div>
        {chips.map((chip) => {
          return (
            <Chip
              avatar={
                <Avatar style={{ backgroundColor: `${chip.color}` }}>
                  <p style={typographyGreyColor}>{chip.name.charAt(0)}</p>
                </Avatar>
              }
              label={
                <p style={isWhite ? withWhite : withoutWhite}>{chip.name}</p>
              }
              clickable
              style={orginize}
              variant="outlined"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChipsGenerator;
