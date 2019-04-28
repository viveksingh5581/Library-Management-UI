import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../modules/login/";
import Core from "../modules/core";
import Module1 from "../modules/core/module1";
import Module2 from "../modules/core/module2";
import Module3 from "../modules/core/module3";
import Module4 from "../modules/core/module4";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact strict component={Login} />
          <ProtectedRoute path="/core" exact strict component={Core} />
          <Route path="/module1" exact strict component={Module1} />
          <Route path="/module2" exact strict component={Module2} />
          <Route path="/module3" exact strict component={Module3} />
          <Route path="/module4" exact strict component={Module4} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
