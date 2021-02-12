import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./router/Routes";
import "../src/assets/css/figpi.min.css";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
