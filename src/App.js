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

// Routing
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact={true} path="/" component={HomeView} />
            <ProtectedRoute path="/analytics" component={AnalyticsView} />
            <ProtectedRoute path="/storage" component={StorageView} />
            <ProtectedRoute path="/account" component={AccountView} />
            <ProtectedRoute path="/god_view" component={GodView} />

            <ProtectedRoute path="/select_store" component={SelectStore} />
            <ProtectedRoute path="/reset" component={ResetPass} />
            <ProtectedRoute path="/uncounted" component={Uncounted} />
            <ProtectedRoute path="/counted" component={Counted} />

            <ProtectedRoute path="/statistics" component={StatisticsView} />
            <ProtectedRoute
              path="/build-analytics"
              component={BuildAnalytics}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
