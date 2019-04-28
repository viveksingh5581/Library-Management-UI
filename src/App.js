import React, { Component } from "react";
import Header from "./modules/header";
import Login from "./modules/login/";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
