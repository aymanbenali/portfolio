import { createMuiTheme }  from '@material-ui/core/styles';
const font =  "'Roboto Condensed', sans-serif";
const theme = createMuiTheme({
  palette: {
    whiteColor: {
      color: '#F8F8F8'
    },
    typographyWhiteColor: {
      fontFamily: font,
      color: '#141C3A',
      button: {
        textTransform: "none"
      },
      marginLeft: '20px'
    },
    descriptionText: {
      fontFamily: font,
      color: '#F8F8F8',
      button: {
        textTransform: "none"
      },
      margin: '20px',
      textAlign: 'center'
    },
    typographyGreyColor: {
      fontFamily: font,
      color: '#3A4756',
      button: {
        textTransform: "none"
      },
    },
    greyColor: {
    	color: '#3A4756',
    },
    title: {
	 fontFamily: font,
      color: '#7510F7',
      button: {
        textTransform: "none"
      },
      textAlign: 'center'
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

export default theme
