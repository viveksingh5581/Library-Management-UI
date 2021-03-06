import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../modules/login/";
import Core from "../modules/core";
import Admin from "../modules/core/Admin";
import Search from "../modules/core/Search";
import User from "../modules/core/User";
import Visitor from "../modules/core/Visitor";
import Registration from "../modules/Registration";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={Login} />
          <ProtectedRoute path="/core" exact strict component={Core} />
          <Route path="/register" exact strict component={Registration} />
          <Route path="/admin" exact strict component={Admin} />
          <Route path="/search" exact strict component={Search} />
          <Route path="/user" exact strict component={User} />
          <Route path="/visitor" exact strict component={Visitor} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
