import React from "react";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";
import Button from "../../core-components/button";
import {
  BUTTON_VALUE_MODULE_ADMIN,
  BUTTON_VALUE_MODULE_USER,
  BUTTON_VALUE_MODULE_Search,
  BUTTON_VALUE_MODULE_VISITOR,
  MODULE_TEXT
} from "./constants";
import "./style.css";

class Core extends React.Component {
  state = {
    value: null,
    redirect: null,
    isRedirect: false
  };

  renderButton = value => {
    return (
      <Button
        value={value}
        variant="contained"
        color="primary"
        className="button"
        onClick={this.handleClick}
      />
    );
  };

  renderCard = (moduleName, moduleButtonValue) => {
    return (
      <Card className="eachCard">
        <CardContent>
          <Typography
            className="typo"
            color="textPrimary"
            variant="button"
            align="center"
          >
            {moduleName}
          </Typography>
          {this.renderButton(moduleButtonValue)}
        </CardContent>
      </Card>
    );
  };

  handleClick = e => {
    let redirect;
    switch (e.target.textContent) {
      case BUTTON_VALUE_MODULE_ADMIN:
        redirect = "admin";
        break;
      case BUTTON_VALUE_MODULE_USER:
        redirect = "user";
        break;
      case BUTTON_VALUE_MODULE_Search:
        redirect = "search";
        break;
      case BUTTON_VALUE_MODULE_VISITOR:
        redirect = "visitor";
        break;
      default:
        break;
    }
    this.setState({ redirect: redirect, isRedirect: true });
  };
  render() {
    if (this.state.isRedirect) {
      let redirect = "/" + this.state.redirect;
      return <Redirect to={redirect} />;
    }
    return (
      <div className="cards">
        <div />
        {this.renderCard(MODULE_TEXT, BUTTON_VALUE_MODULE_ADMIN)}
        {this.renderCard(MODULE_TEXT, BUTTON_VALUE_MODULE_USER)}
        {this.renderCard(MODULE_TEXT, BUTTON_VALUE_MODULE_Search)}
        {this.renderCard(MODULE_TEXT, BUTTON_VALUE_MODULE_VISITOR)}
      </div>
    );
  }
}

export default Core;
