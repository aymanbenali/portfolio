import React from 'react';
import FirstSalute from './subComponents/FirstSalute';
import MyDescription from './subComponents/Description';

const FirstContainer = ({titles, about, theme}) => {
    return(
        <div>
            <FirstSalute texts={titles} theme={theme}/>
            <MyDescription data={about} theme={theme}/>
        </div>
    )
}

export default FirstContainer;