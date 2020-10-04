import { createMuiTheme }  from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const font =  "'Roboto Condensed', sans-serif";

const useWindowSize = () => {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);
  return windowSize;
};

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
        grid:{
          margin: size.width < computerDefaultSize ? '20%' : '',
          marginTop: size.width > computerDefaultSize ? '7%' : ''
        },
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
          margin: '20px'
          },
        },
        card: {
          root: {
            borderStyle: 'solid',
            borderRadius: '20px',
            borderColor: '#7510F7'
          },
          grid: {
            margin: '2%',
            maxWidth: size.width > computerDefaultSize ? '100%' : 330,
            width: size.width > computerDefaultSize ? 'auto' : '',
          },
          media: {
            height: 140,
          },
        },
      jobs: {
        mask: {
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
    size,
  });
}

export default Theme;
