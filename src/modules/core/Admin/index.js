import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Input from "../../../core-components/input";
import { Redirect } from "react-router-dom";
import Button from "../../../core-components/button";
import { ADMIN_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import "./style.css";

class AdminPage extends Component {
  state = {
    isRedirect: null
  };
  handleClick = () => {
    this.setState({ isRedirect: true });
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
              {ADMIN_PAGE_HEADER}
            </Typography>
            <CardContent>
              {this.renderInput(
                "text",
                "Add Book Here...",
                this.onChangeBookAdd,
                "Add Book"
              )}
              <Button
                value="Add"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleBookClick}
              />
            </CardContent>
            <CardContent>
              {this.renderInput(
                "text",
                "Add Video Here...",
                this.onChangeVideoAdd,
                "Add Video"
              )}
              <Button
                value="Add"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleVideoClick}
              />
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}
export default AdminPage;
