import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./router/Routes";
import "../src/assets/css/figpi.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
