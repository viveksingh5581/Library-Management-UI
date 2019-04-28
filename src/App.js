import React, { Component } from "react";
import Header from "./modules/header";
import "./App.css";
import Routes from "./Routes/Routes";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
