import React from 'react';
import Typography from '@material-ui/core/Typography';
import ChipsGenerator from './Chips';

export const Technologies = (props) => {
  const { technologies, theme } = props;
  return (
    <div>
      <grid container direction="column" justify="center" alignItems="stretch">
        <Typography style={theme.description.text}> {props.text} </Typography>
        {
            < ChipsGenerator
                chips={technologies}
                withTitle={false}
                isWhite={true}
                theme={theme}
            />
        }
      </grid>
    </div>
  )
}

export default Technologies;