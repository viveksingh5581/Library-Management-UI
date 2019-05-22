import React from "react";
import Input from "../../../core-components/input";
import Typography from "@material-ui/core/Typography";
import Button from "../../../core-components/button";
import RestClient from "../../../utils/RestClient";
import { createBook } from "../../../utils/apiUrls";
import "./style.css";

class BookForm extends React.Component {
  state = {
    isRegister: false,
    authorName: null,
    bindingId: null,
    bookDetailsIsbnCode: null,
    bookDetailsTitle: null,
    bookLanguage: null,
    bookPrice: null,
    categoryId: null,
    noOfCopiesActual: null,
    publicationName: null,
    publicationYear: null,
    isError: false,
    isSuccess: false
  };

  onChangeAuthor = event => {
    this.setState({ authorName: event.target.value });
  };
  onChangeBindingId = event => {
    this.setState({ bindingId: event.target.value });
  };
  onChangeIsbn = event => {
    this.setState({ bookDetailsIsbnCode: event.target.value });
  };
  onChangeTitle = event => {
    this.setState({ bookDetailsTitle: event.target.value });
  };
  onChangePrice = event => {
    this.setState({ bookPrice: event.target.value });
  };
  onChangeCategoryId = event => {
    this.setState({ categoryId: event.target.value });
  };
  onChangeLang = event => {
    this.setState({ bookLanguage: event.target.value });
  };
  onChangeNo = event => {
    this.setState({ noOfCopiesActual: event.target.value });
  };
  onChangeName = event => {
    this.setState({ publicationName: event.target.value });
  };
  onChangeYear = event => {
    this.setState({ publicationYear: event.target.value });
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
    let url = createBook;
    new RestClient(url).post(successCB, errorCB, requestBody);
  };
  _createRequestBody = () => {
    return {
      authorName: this.state.authorName,
      bindingId: this.state.bindingId,
      bookDetailsIsbnCode: this.state.bookDetailsIsbnCode,
      bookDetailsTitle: this.state.bookDetailsTitle,
      bookLanguage: this.state.bookLanguage,
      bookPrice: this.state.bookPrice,
      categoryId: this.state.categoryId,
      noOfCopiesActual: this.state.noOfCopiesActual,
      publicationName: this.state.publicationName,
      publicationYear: this.state.publicationYear
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

  render() {
    return (
      <>
        <div>
          {this.renderFields("Author Name", "text", this.onChangeAuthor)}
          {this.renderFields("Binding Id", "text", this.onChangeBindingId)}
          {this.renderFields("Book Isbn Code", "text", this.onChangeIsbn)}
          {this.renderFields("Title", "text", this.onChangeTitle)}
          {this.renderFields("Price", "text", this.onChangePrice)}
          {this.renderFields("Language", "text", this.onChangeLang)}
          {this.renderFields("Category Id", "text", this.onChangeCategoryId)}
          {this.renderFields("Total No of Copies", "text", this.onChangeNo)}
          {this.renderFields("Publication Name", "text", this.onChangeName)}
          {this.renderFields("Publication Year", "text", this.onChangeYear)}
          <Button
            value="Add Book"
            variant="contained"
            color="primary"
            className="button"
            onClick={this.handleSubmit}
          />
          {this.state.isError ? (
            <Typography variant="error" color="error">
              Book Is already Present
            </Typography>
          ) : (
            ""
          )}

          {this.state.isSuccess ? (
            <Typography variant="h6" color="inherit">
              Added Book Successfull !!
            </Typography>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default BookForm;
