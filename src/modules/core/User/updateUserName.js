import React from "react";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import RestClient from "../../../utils/RestClient.js";
import { updateNames } from "../../../utils/apiUrls";
import "./style.css";

class UpdateNames extends React.Component {
  state = {
    email: null,
    firstName: null,
    lastName: null
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

  onChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };

  onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  _createRequestBody = () => {
    return {
      emailAddress: this.state.email,
      userFirstName: this.state.firstName,
      userLastName: this.state.lastName
    };
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
    let url = updateNames;
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
          "text",
          "Please Enter First Name",
          this.onChangeFirstName,
          "Enter First Name"
        )}
        {this.renderInput(
          "password",
          "Please Enter Last Name",
          this.onChangeLastName,
          "Enter Last Name"
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

export default UpdateNames;
