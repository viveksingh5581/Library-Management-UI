import React from "react";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import RestClient from "../../../utils/RestClient";
import { createVideo } from "../../../utils/apiUrls";
import "./style.css";

class VideoForm extends React.Component {
  state = {
    directorName: null,
    releaseYear: null,
    Price: null,
    Rating: null,
    Title: null,
    CategoryId: null,
    isError: false,
    isSuccess: false
  };

  onChangeTitle = event => {
    this.setState({ Title: event.target.value });
  };
  onChangePrice = event => {
    this.setState({ Price: event.target.value });
  };
  onChangeId = event => {
    this.setState({ CategoryId: event.target.value });
  };
  onChangeRating = event => {
    this.setState({ Rating: event.target.value });
  };
  onChangeName = event => {
    this.setState({ directorName: event.target.value });
  };
  onChangeYear = event => {
    this.setState({ releaseYear: event.target.value });
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
    let url = createVideo;
    new RestClient(url).post(successCB, errorCB, requestBody);
  };
  _createRequestBody = () => {
    return {
      directorName: this.state.directorName,
      releaseYear: this.state.releaseYear,
      Price: this.state.Price,
      Rating: this.state.Rating,
      Title: this.state.Title,
      CategoryId: this.state.CategoryId
    };
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

  handleBackClick = () => {
    this.setState({ isRegister: true });
  };

  render() {
    return (
      <>
        <div>
          {this.renderFields("Title", "text", this.onChangeTitle)}
          {this.renderFields("Director Name", "text", this.onChangeName)}
          {this.renderFields("Release Year", "text", this.onChangeYear)}
          {this.renderFields("Price", "text", this.onChangePrice)}
          {this.renderFields("Rating", "text", this.onChangeRating)}
          {this.renderFields("Category Id", "text", this.onChangeId)}
          <Button
            value="Add Video"
            variant="contained"
            color="primary"
            className="button"
            onClick={this.handleSubmit}
          />
          {this.state.isError ? (
            <Typography variant="error" color="error">
              Video Is already Present
            </Typography>
          ) : (
            ""
          )}

          {this.state.isSuccess ? (
            <Typography variant="h6" color="inherit">
              Added Video Successfull !!
            </Typography>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default VideoForm;
