import React from "react";
import { Redirect } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import * as RegistrationConstant from "./constants";
import { createUser } from "../../../utils/apiUrls";
import RestClient from "../../../utils/RestClient";
import "./style.css";

class RegistrationForm extends React.Component {
  state = {
    isRegister: false,
    email: null,
    password: null,
    re_password: null,
    userName: null,
    firstName: null,
    lastName: null,
    isError: false,
    isSuccess: false
  };

  handleSubmit = () => {
    const errorCB = error => {
      console.log(error);
      this.setState({ isError: true });
    };
    const successCB = response => {
      console.log(response);
      this.setState({ isSuccess: true, isError: false, isRegister: true });
    };
    let requestBody = this._createRequestBody();
    let url = createUser;
    new RestClient(url).post(successCB, errorCB, requestBody);
  };
  _createRequestBody = () => {
    return {
      emailAddress: this.state.email,
      originalPassword: this.state.password,
      userFirstName: this.state.firstName,
      userLastName: this.state.lastName,
      userName: this.state.userName,
      valid: true
    };
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangeUserName = event => {
    this.setState({ userName: event.target.value });
  };
  onChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangePassword2 = event => {
    this.setState({ re_password: event.target.value });
  };

  _checkPassword() {
    if (this.state.password === this.state.re_password) {
      this.setState({ isError: true });
    }
  }
  renderFields = (fieldName, type, onChange, placeHolder) => {
    return (
      <div>
        <Typography>{fieldName}</Typography>
        <Input type={type} onChange={onChange} placeholder={placeHolder} />
        <br />
      </div>
    );
  };

  handleBackClick = () => {
    this.setState({ isRegister: true });
  };
  render() {
    if (this.state.isRegister) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div className="back">
          <Button
            value="Back to Login"
            variant="contained"
            color="primary"
            className="button"
            onClick={this.handleBackClick}
          />
        </div>
        <div className="registerPage">
          <Card>
            <Typography className="typo" variant="headline">
              {RegistrationConstant.TITLE}
            </Typography>
            <CardContent>
              {this.renderFields(
                RegistrationConstant.EMAIL,
                "text",
                this.onChangeEmail,
                RegistrationConstant.EMAIL_PLACEHOLDER
              )}
              {this.renderFields(
                RegistrationConstant.USER_NAME,
                "text",
                this.onChangeUserName,
                RegistrationConstant.USER_NAME_PLACEHOLDER
              )}
              {this.renderFields(
                RegistrationConstant.FIRST_NAME,
                "text",
                this.onChangeFirstName,
                RegistrationConstant.FIRST_NAME_PLACEHOLDER
              )}
              {this.renderFields(
                RegistrationConstant.LAST_NAME,
                "text",
                this.onChangeLastName,
                RegistrationConstant.LAST_NAME_PLACEHOLDER
              )}
              {this.renderFields(
                RegistrationConstant.PASSWORD,
                "password",
                this.onChangePassword,
                RegistrationConstant.PASSWORD_PLACEHOLDER
              )}
              {this.renderFields(
                RegistrationConstant.RE_ENTER_PASSWORD,
                "password",
                this.onChangePassword2,
                RegistrationConstant.PASSWORD_PLACEHOLDER
              )}
              <Button
                value="Register"
                variant="contained"
                color="primary"
                className="button"
                onClick={this.handleSubmit}
              />
            </CardContent>
          </Card>
          {this.state.isError ? (
            <Card>
              <CardContent>
                <Typography variant="error" color="error">
                  User Is Already Registered
                </Typography>
              </CardContent>
            </Card>
          ) : (
            ""
          )}

          {this.state.isSuccess ? (
            <Card>
              <CardContent>
                <Typography variant="h6" color="inherit">
                  Registraion Successfull !!
                </Typography>
              </CardContent>
            </Card>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default RegistrationForm;
