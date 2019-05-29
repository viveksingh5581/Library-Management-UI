import React from "react";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import RestClient from "../../../utils/RestClient.js";
import { updatePassword } from "../../../utils/apiUrls";
import "./style.css";

class UpdatePassword extends React.Component {
  state = {
    email: null,
    password: null
  };
  renderInput = (type, placeholder, onChange, header) => {
    return (
      <div>
        <Typography>{header}</Typography>
        <Input type={type} onChange={onChange} placeholder={placeholder} />
        <br />
      </div>
    );
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onChangeOldPassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangeNewPassword = event => {
    this.setState({ re_password: event.target.value });
  };

  _createRequestBody = () => {
    return {
      emailAddress: this.state.email,
      originalPassword: this.state.password
    };
  };

  handleSubmit = () => {
    const errorCB = error => {
      console.log(error);
      this.setState({ isSuccess: false, isError: true });
    };
    const successCB = response => {
      console.log(response);
      this.setState({ isSuccess: true, isError: false });
    };
    let requestBody = this._createRequestBody();
    let url = updatePassword;
    new RestClient(url).post(successCB, errorCB, requestBody);
  };

  render() {
    return (
      <div className="updateFields">
        {this.renderInput(
          "text",
          "Please Enter Email",
          this.onChangeEmail,
          "Email Id:"
        )}
        {this.renderInput(
          "password",
          "Please Enter Old Password",
          this.onChangeOldPassword,
          "Old Password"
        )}
        {this.renderInput(
          "password",
          "Please Enter New Password",
          this.onChangeNewPassword,
          "New Password"
        )}
        <Button
          value="Update"
          variant="contained"
          color="primary"
          className="button"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default UpdatePassword;
