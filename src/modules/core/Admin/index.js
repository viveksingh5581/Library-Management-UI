import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import Input from "../../../core-components/input";
import { Redirect } from "react-router-dom";
import Button from "../../../core-components/button";
import { BACK_TO_MAIN } from "../constants";
import BookFrom from "./bookAdd";
import VideoAdd from "./videoAdd";
import "./style.css";

class AdminPage extends Component {
  state = {
    isRedirect: null,
    videoTitle: null,
    selectedValue: null,
    showFormBook: false,
    showFormVideo: false
  };
  handleClick = () => {
    this.setState({ isRedirect: true });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
    if (this.state.selectedValue === "a") {
      this.setState({ showFormBook: true, showFormVideo: false });
    }
    if (this.state.selectedValue === "b") {
      this.setState({ showFormBook: false, showFormVideo: true });
    }
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
  renderAddBook = () => {
    return <BookFrom />;
  };

  renderAddVideo = () => {
    return <VideoAdd />;
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
            <CardContent>
              <div>
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                />
                Add Videos
                <Radio
                  checked={this.state.selectedValue === "b"}
                  onChange={this.handleChange}
                  value="b"
                  name="radio-button-demo"
                  aria-label="B"
                />
                Add Books
              </div>
              <CardContent>
                {this.state.showFormBook ? this.renderAddBook() : ""}
                {this.state.showFormVideo ? this.renderAddVideo() : ""}
              </CardContent>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}
export default AdminPage;
