import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import "./style.css";

class VisitorPage extends Component {
  render() {
    return (
      <div className="cards">
        <Card>
          <Typography className="typo" variant="headline">
            {"Visitor Module"}
          </Typography>
          <CardContent>Visitor</CardContent>
        </Card>
      </div>
    );
  }
}

export default VisitorPage;
