import React from 'react';
import Grid from '@material-ui/core/Grid';
import GreatThings from '../GreatThings/GreatThings';

const FirstSalute = ({texts , theme}) => {
  return (
    <div style={theme.firestSalute}>
      <Grid container direction="column" justify="center" alignItems="stretch" >
        <section>
            {
                texts.map(text => < GreatThings text = {text} />)
            }
        </section>
      </Grid>
    </div>
  );
};

export default FirstSalute;