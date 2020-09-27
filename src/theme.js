import { createMuiTheme }  from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const font =  "'Roboto Condensed', sans-serif";


const useWindowSize = () => {
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


const Theme = () => {
  const computerDefaultSize = 1246;
  const size = useWindowSize();
  return createMuiTheme({
    palette: {
      firestSalute: {
        color: '#7510F7'
      },
      chips:{
        div: { marginLeft: '20px'},
        withWhite: {color: '#FFFFFF'},
        withoutWhite: {color: '#141C3A'},
        orginize: {
          marginLeft: 5,
          color:'#FFFFFF',
        }
      },
      description:{
        grid:{margin: size.width < computerDefaultSize ? '20%' : '7%'},
        mask:{
          backgroundColor: '#7510F7',
          height: '105%',
          borderRadius: '25px',
          width: size.width < computerDefaultSize ? '120%' : 'auto'
        },
        text: {
          fontFamily: font,
          color: '#F8F8F8',
          button: {
            textTransform: "none"
          },
          margin: '20px',
          textAlign: 'center'
          }
      },
      jobs: {
        mask: {
          borderStyle: 'solid',
          borderColor: '#141C3A',
          borderRadius: '25px',
          margin: '20px',
          padding: '20px'
        }
      },
      typographyWhiteColor: {
        fontFamily: font,
        color: '#141C3A',
        button: {
          textTransform: "none"
        },
        marginLeft: '20px'
      },
      mask: {
        borderStyle: 'solid',
        borderColor: '#7510F7',
        height: '105%',
        borderRadius: '25px',
      },
      typographyGreyColor: {
        fontFamily: font,
        color: '#3A4756',
        button: {
          textTransform: "none"
        },
      },
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
}

export default Theme;
