import React from 'react';
import Typography from '@material-ui/core/Typography';
import MediaCard from './subComponents/Card';
import Jobs from './subComponents/Jobs';

const Carrer = ({data, theme}) => {
  console.log(theme)
    const { mask, title, card } = theme;
    const { jobs, projects } = data;
    return (
        <div style={{
            margin: '30px'
        }}>
          <div>
              <Typography component="div" style={mask}>
                  <div style={{margin: '25px'}}>
                    <Typography variant="h4" style={title}>
                        Professional career
                    </Typography>
                    < Jobs jobs={jobs} theme={theme}/>              
                  </div>
              </Typography>
          </div>
          <div style={{marginTop: '20px'}}>
            <Typography variant="h4" style={title}>
                Projects
                <MediaCard projects={projects} theme={card}/>
            </Typography>  
          </div>
        </div>
    )
}

export default Carrer;