import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import { Redirect } from "react-router-dom";
import { VISITOR_SEARCH_PAGE_HEADER } from "./constants";
import { BACK_TO_MAIN } from "../constants";
import { searchBookUrl } from "../../../utils/urlBuilder";
import RestClient from "../../../utils/RestClient";
import "./style.css";

class VisitorPage extends Component {
  state = {
    isRedirect: null,
    bookTitle: null,
    searchResultBook: null
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

  onChangeSearch = event => {
    this.setState({ bookTitle: event.target.value });
  };

  handleClickSearch = () => {
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
            <CardContent>
              {this.renderInput(
                "text",
                "Please Search...",
                this.onChangeSearch,
                "Search"
              )}
              <Button
                value="Search"
                variant="contained"
                color="secondary"
                className="button"
                onClick={this.handleClickSearch}
              />
            </CardContent>
            <div>
              <Card>
                <CardContent>
                  {this.renderSearchResultForBook(this.state.searchResultBook)}
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default VisitorPage;
