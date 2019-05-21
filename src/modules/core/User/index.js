import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import Button from "../../../core-components/button";
import { USER_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import "./style.css";

class UserPage extends Component {
  state = {
    isRedirect: null
  };
  handleClick = () => {
    this.setState({ isRedirect: true });
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
        <div className="cards">
          <Card>
            <Typography className="typo" variant="headline">
              {USER_PAGE_HEADER}
            </Typography>
            <CardContent>User</CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default UserPage;
