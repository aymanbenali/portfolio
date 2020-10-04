import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

const App = (props) => {
  return (
    <Router>
      <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Switch>
            <Route exact path="/portfolio" component={Home} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
