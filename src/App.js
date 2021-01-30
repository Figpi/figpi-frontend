import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/assets/css/figpi.min.css";

// Main Views
import HomeView from "./views/Home";
import AnalyticsView from "./views/AnalyticsView";
import StorageView from "./views/StorageView";
import AccountView from "./views/AccountView";

import Uncounted from "./views/Uncounted";
import Counted from "./views/Counted";

import StatisticsView from "./views/StatisticsView";
import GodView from "./views/GodView";
import BuildAnalytics from "./views/BuildAnalytics";

// Login and Auth views
import Login from "./views/Login";
import SelectStore from "./views/SelectStore";
import ResetPass from "./views/ResetPass";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/analytics" component={AnalyticsView} />
            <Route path="/storage" component={StorageView} />

            <Route path="/login" component={Login} />
            <Route path="/select_store" component={SelectStore} />
            <Route path="/reset" component={ResetPass} />
            <Route path="/god_view" component={GodView} />

            <Route path="/uncounted" component={Uncounted} />
            <Route path="/counted" component={Counted} />

            <Route path="/account" component={AccountView} />
            <Route path="/statistics" component={StatisticsView} />
            <Route path="/build-analytics" component={BuildAnalytics} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
