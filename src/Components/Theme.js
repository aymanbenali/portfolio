import { createMuiTheme } from "@material-ui/core/styles";
import useWindowSize from "./subComponents/screenSize";

const font = "'Roboto Condensed', sans-serif";

const Theme = () => {
  const computerDefaultSize = 1246;
  const { width } = useWindowSize();
  console.log(width);
  return createMuiTheme({
    palette: {
      firestSalute: {
        color: "#7510F7",
      },
      chips: {
        div: { marginLeft: "20px" },
        withWhite: { color: "#FFFFFF" },
        withoutWhite: { color: "#141C3A" },
        orginize: {
          margin: 5,
          color: "#FFFFFF",
        },
      },
      description: {
        grid: {
          marginTop: "7%",
        },
        mask: {
          backgroundColor: "#7510F7",
          height: "105%",
          borderRadius: "25px",
          marginLeft: "7%",
          width: width > computerDefaultSize ? "120%" : "90%",
        },
        text: {
          fontFamily: font,
          color: "#F8F8F8",
          button: {
            textTransform: "none",
          },
          margin: "20px",
        },
      },
      card: {
        grid: {
          margin: "2%",
          maxWidth: width > computerDefaultSize ? "100%" : 330,
          width: width > computerDefaultSize ? "auto" : "",
        },
        media: {
          height: 140,
          borderRadius: "20px",
        },
      },
      jobs: {
        mask: {
          padding: "20px",
        },
      },
      typographyWhiteColor: {
        fontFamily: font,
        color: "#141C3A",
        button: {
          textTransform: "none",
        },
        marginLeft: "20px",
      },
      mask: {
        borderStyle: "solid",
        borderColor: "#7510F7",
        height: "105%",
        borderRadius: "25px",
      },
      typographyGreyColor: {
        fontFamily: font,
        color: "#3A4756",
        button: {
          textTransform: "none",
        },
      },
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
};

export default Theme;
