import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import { connect } from "react-redux";
import style from "./body.module.css";

import {
  UpdateData,
  Canceldata,
  CancelISBN,
  BooksIsPicked,
  ReSavedData,
  DeleteBook,
  setAdditionalAuthor,
  editModePreview,
  filterByDate,
  filterByTitle
} from "../../redux/page-reducer";

import ISBN from "../ISBN/ISBN";
import Preview from "../Preview/preview";

let Body = props => {
  return (
    <div className={`row container-fluid ${style.body}`}>
      <List
        books={props.books}
        BooksIsPicked={props.BooksIsPicked}
        CancelISBN={props.CancelISBN}
        Canceldata={props.Canceldata}
        filterByDate={props.filterByDate}
        filterByTitle={props.filterByTitle}
      />
      {!props.books.createMode ? (
        undefined
      ) : (
        <Form
          UpdateData={props.UpdateData}
          Canceldata={props.Canceldata}
          {...props}
        ></Form>
      )}
      {!props.books.createModeISBN ? (
        undefined
      ) : (
        <ISBN
          UpdateData={props.UpdateData}
          CancelISBN={props.CancelISBN}
          {...props}
        ></ISBN>
      )}
      {props.books.chosenBooks &&
      !props.books.createMode &&
      !props.books.createModeISBN ? (
        <Preview {...props} />
      ) : (
        undefined
      )}
    </div>
  );
};
let mapStateToProps = state => {
  return {
    books: state.books
  };
};
let BodyContainer = connect(mapStateToProps, {
  UpdateData,
  Canceldata,
  CancelISBN,
  BooksIsPicked,
  ReSavedData,
  DeleteBook,
  setAdditionalAuthor,
  editModePreview,
  filterByDate,
  filterByTitle
})(Body);
export default BodyContainer;
