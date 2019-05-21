import React from "react";
import { Redirect } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import * as LoginConst from "./constants";
import RestClient from "../../../utils/RestClient";
import { loginUrlBuilder } from "../../../utils/urlBuilder";
import "./style.css";

class LoginPage extends React.Component {
  state = {
    email: null,
    password: null,
    errorEmail: false,
    errorPassword: false,
    isRedirect: false,
    isRegistration: false,
    isError: false
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    const errorCB = error => {
      this.setState({ isRedirect: this.state.isRedirect, isError: true });
    };
    const successCB = response => {
      this.setState({ isRedirect: response.valid });
    };
    let redirect = this._validateLogin();
    if (redirect) {
      this.setState({ isRedirect: !redirect });
    }
    let url = loginUrlBuilder(this.state.email, this.state.password);
    new RestClient(url).get(successCB, errorCB);
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

  renderLogin = (type, placeholder, onChange, header) => {
    return (
      <div>
        <Typography>{header}</Typography>
        <Input type={type} onChange={onChange} placeholder={placeholder} />
        <br />
      </div>
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
            {this.renderLogin(
              "text",
              LoginConst.EMAIL_PLACEHOLDER,
              this.onChangeEmail,
              LoginConst.USER_LOGIN_TEXT
            )}
            {this.renderLogin(
              "password",
              LoginConst.PASSWORD_PLACEHOLDER,
              this.onChangePassword,
              LoginConst.PASSWORD
            )}
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
        {this.state.isError ? (
          <Card>
            <CardContent>
              <Typography variant="error" color="error">
                Email Id or password is Wrong
              </Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LoginPage;
