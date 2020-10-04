import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "./Header";
import FirstContainer from "./FirstContainer";
import Carrer from "./Career";
import Theme from "./Theme";
import Footer from "./Footer";

import JsonData from "../data.json";

const App = () => {
  const { titles, about } = JsonData;
  if (Theme())
    return (
      <div>
        <Container maxWidth="la">
          <MuiThemeProvider>
            <Header theme={Theme().palette.title} />
            <FirstContainer
              titles={titles}
              about={about}
              theme={Theme().palette}
            />
            <Carrer data={JsonData} theme={Theme().palette} />
            <Footer />
          </MuiThemeProvider>
        </Container>
      </div>
    );
};

export default App;
