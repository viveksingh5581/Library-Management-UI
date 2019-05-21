import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Input from "../../../core-components/input";
import { Redirect } from "react-router-dom";
import Button from "../../../core-components/button";
import { SEARCH_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import RestClient from "../../../utils/RestClient";
import { searchBookUrl, searchVideoUrl } from "../../../utils/urlBuilder";

import "./style.css";

class SearchPage extends Component {
  state = {
    isRedirect: null,
    bookTitle: null,
    videoTitle: null,
    searchResultBook: null,
    searchResultVideo: null
  };
  handleClick = () => {
    this.setState({ isRedirect: true });
  };

  onChangeBookSearch = event => {
    this.setState({ bookTitle: event.target.value });
  };

  onChangeVideoSearch = event => {
    this.setState({ videoTitle: event.target.value });
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
  handleBookClick = () => {
    const errorCB = error => {
      console.log(error);
    };
    const successCB = response => {
      console.log(response);
      this.setState({ searchResultBook: response });
    };
    let url = searchBookUrl(this.state.bookTitle);
    new RestClient(url).get(successCB, errorCB);
  };

  handleVideoClick = () => {
    const errorCB = error => {
      console.log(error);
    };
    const successCB = response => {
      console.log(response);
      this.setState({ searchResultVideo: response });
    };
    let url = searchVideoUrl(this.state.videoTitle);
    new RestClient(url).get(successCB, errorCB);
  };

  renderSearchResultForBook = searchResult => {
    let data = searchResult;
    if (data == null) return;
    return (
      <div>
        <table>
          <tr>
            <th>Author</th>
            <th>Book Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>No of Copies</th>
          </tr>
          <tr>
            <td>{data.authorId}</td>
            <td>{data.bookDetailsTitle}</td>
            <td>{data.bookPrice}</td>
            <td>{data.categoryDescription}</td>
            <td>{data.noOfCopiesActual}</td>
          </tr>
        </table>
      </div>
    );
  };

  renderSearchResultForVideo = searchResult => {
    let data = searchResult;
    if (data == null) return;
    return (
      <div>
        <table>
          <tr>
            <th>Category Description</th>
            <th>Director Name</th>
            <th>Release Year</th>
            <th>Price</th>
            <th>Ratings</th>
          </tr>
          <tr>
            <td>{data.categoryDescription}</td>
            <td>{data.directorName}</td>
            <td>{data.releaseYear}</td>
            <td>{data.videoPrice}</td>
            <td>{data.videoRating}</td>
          </tr>
        </table>
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
              {SEARCH_PAGE_HEADER}
            </Typography>
            <CardContent>
              {this.renderInput(
                "text",
                "Please Search Book...",
                this.onChangeBookSearch,
                "Search"
              )}
              <Button
                value="Search"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleBookClick}
              />
            </CardContent>
            <div>
              <Card>
                <CardContent>
                  {this.renderSearchResultForBook(this.state.searchResultBook)}
                </CardContent>
              </Card>
            </div>
            <CardContent>
              {this.renderInput(
                "text",
                "Please Search Video...",
                this.onChangeVideoSearch,
                "Search"
              )}
              <Button
                value="Search"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleVideoClick}
              />
            </CardContent>
          </Card>
          <div>
            <Card>
              <CardContent>
                {this.renderSearchResultForVideo(this.state.searchResultVideo)}
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default SearchPage;
