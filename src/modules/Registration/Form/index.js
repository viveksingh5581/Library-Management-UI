import React from "react";
import { Redirect } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import * as RegistrationConstant from "./constants";
import "./style.css";

class RegistrationForm extends React.Component {
  state = {
    isRegister: false
  };

  handleSubmit = () => {
    this.setState({ isRegister: true });
  };

  renderFields = (fieldName, type, onChange, placeHolder) => {
    return (
      <div>
        <Typography>{fieldName}</Typography>
        <Input type={type} onChange={onChange} placeholder={placeHolder} />
        <br />
      </div>
    );
  };
  render() {
    if (this.state.isRegister) {
      return <Redirect to="/" />;
    }
    return (
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
              this.onChangePassword,
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
      </div>
    );
  }
}

export default RegistrationForm;
