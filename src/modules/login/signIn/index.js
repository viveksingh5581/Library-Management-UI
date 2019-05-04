import React from "react";
import { Redirect } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import * as LoginConst from "./constants";
import "./style.css";

class LoginPage extends React.Component {
  state = {
    email: null,
    password: null,
    errorEmail: false,
    errorPassword: false,
    isRedirect: false,
    isRegistration: false
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    let redirect = this._validateLogin();
    this.setState({ isRedirect: !redirect });
  };

  handleRegistration = () => {
    this.setState({ isRegistration: true });
  };
  _validateLogin = () => {
    return (
      this.state.email === null ||
      this.state.password === null ||
      this.state.email === "" ||
      this.state.password === ""
    );
  };
  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/core" />;
    }
    if (this.state.isRegistration) {
      return <Redirect to="/register" />;
    }
    return (
      <div className="login">
        <Card>
          <Typography className="typo" variant="headline">
            {LoginConst.TITLE}
          </Typography>
          <CardContent>
            <Typography>{LoginConst.USER_LOGIN_TEXT}</Typography>
            <Input type="text" onChange={this.onChangeEmail} />
            <br />
            <Typography>{LoginConst.PASSWORD}</Typography>
            <Input type="password" onChange={this.onChangePassword} />
            <br />
            <Button
              value="Submit"
              variant="contained"
              color="primary"
              className="button"
              onClick={this.handleSubmit}
            />
            <div className="register">
              <Button
                value="Click here To Register"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleRegistration}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
