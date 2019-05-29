import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import Button from "../../../core-components/button";
import Radio from "@material-ui/core/Radio";
import { USER_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import UpdateNames from "./updateUserName";
import UpdatePassword from "./updatePassword";
import "./style.css";

class UserPage extends Component {
  state = {
    isRedirect: null,
    isUpdatePassword: false,
    selectedValueA: false,
    selectedValueB: false,
    isUpdateName: false
  };
  handleClick = () => {
    this.setState({ isRedirect: true });
  };
  handleChange = event => {
    let value = event.target.value;
    if (value === "a") {
      this.setState({
        selectedValueA: true,
        selectedValueB: false,
        isUpdatePassword: true,
        isUpdateName: false
      });
    }
    if (value === "b") {
      this.setState({
        selectedValueA: false,
        selectedValueB: true,
        isUpdatePassword: false,
        isUpdateName: true
      });
    }
  };

  renderComponent = () => {
    if (this.state.isUpdateName) {
      return <UpdateNames />;
    }
    if (this.state.isUpdatePassword) {
      return <UpdatePassword />;
    }
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/core" />;
    }
    return (
      <>
        <div className="back">
          <Button
            value={BACK_TO_MAIN}
            variant="contained"
            color="primary"
            className="button"
            onClick={this.handleClick}
          />
        </div>
        <div className="userCards">
          <Card>
            <Typography className="typo" variant="headline">
              {USER_PAGE_HEADER}
            </Typography>
            <CardContent>
              <div>
                <Radio
                  checked={this.state.selectedValueA}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                />
                Update / Change Password
                <Radio
                  checked={this.state.selectedValueB}
                  onChange={this.handleChange}
                  value="b"
                  name="radio-button-demo"
                  aria-label="B"
                />
                Update First Name and Last Name
              </div>
              <CardContent>{this.renderComponent()}</CardContent>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default UserPage;
