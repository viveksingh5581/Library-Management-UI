import React, { Component } from "react";
import LoginPage from "./signIn";

class Login extends Component {
  handleSubmit = (email, password) => {
    console.log(email + " " + password);
  };
  render() {
    return (
      <div>
        <LoginPage onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Login;
