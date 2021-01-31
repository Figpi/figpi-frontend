import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Main Views
import HomeView from "../views/Home";
import AnalyticsView from "../views/AnalyticsView";
import StorageView from "../views/StorageView";
import AccountView from "../views/AccountView";

// Analytics Views
import Uncounted from "../views/Uncounted";
import Counted from "../views/Counted";

// Non-finished Views
import StatisticsView from "../views/StatisticsView";
import GodView from "../views/GodView";
import BuildAnalytics from "../views/BuildAnalytics";

// Login and Auth views
import Login from "../views/Login";
import SelectStore from "../views/SelectStore";
import ResetPass from "../views/ResetPass";

// Protected Route Function
function ProtectedRoute(props) {
  const Component = props.component;
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}

// Main Routes for the application
function Routes() {
  return (
    <>
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
        <ProtectedRoute path="/build-analytics" component={BuildAnalytics} />
      </Switch>
    </>
  );
}

export default Routes;
