import React, {
    useEffect,
    useState
}
from 'react';
import Grid from '@material-ui/core/Grid';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';

import Technologies from './Technologies';
import MyPhoto from "../../images/Ayman.png";

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

const MyDescription = ({data, theme}) => {
  const { description, technologies } = data;
  const myDescription = description.split('.');
  const { grid, mask, text } = theme.description;
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
              myDescription.map(item => <Typography style={text}> {item}. </Typography>)
            }
            <Technologies
                theme={theme}
                technologies={technologies}
                text={'Here are some of the most technologies i work with:'}
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyDescription;