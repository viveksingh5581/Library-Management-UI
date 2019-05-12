import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import { Redirect } from "react-router-dom";
import { VISITOR_SEARCH_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import "./style.css";

class VisitorPage extends Component {
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
              {VISITOR_SEARCH_PAGE_HEADER}
            </Typography>
            <CardContent>Visitor</CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default VisitorPage;