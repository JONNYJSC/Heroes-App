import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboradRoutes } from "./DashboradRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboradRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
