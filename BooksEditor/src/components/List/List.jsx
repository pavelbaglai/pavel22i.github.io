import React from "react";
import style from "./List.module.css";

let List = props => {
  return (
    <div className="col-6">
      {props.books.books.length > 1 ? (
        <div className={style.menu}>
          <button
            className=" bg-dark text-light "
            type="button"
            onClick={() => props.filterByTitle()}
          >
            <h6>сортировка по названию</h6>
          </button>
          <button
            className=" bg-dark text-light "
            type="button"
            onClick={() => props.filterByDate()}
          >
            <h6>сортировка по дате</h6>
          </button>
        </div>
      ) : (
        undefined
      )}
      <div className={`row ${style.list}`}>
        {props.books.books.length > 0
          ? props.books.books.map(el => {
              return (
                <div
                  className="col-12"
                  onClick={() => {
                    props.BooksIsPicked(el);
                    props.CancelISBN(false);
                    props.Canceldata(false);
                  }}
                  key={el.id}
                >
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>"{el.bookTitle}" </strong>
                      {el.firstName + " " + el.lastName + " " + el.date}
                    </li>
                  </ul>
                </div>
              );
            })
          : undefined}
      </div>
    </div>
  );
};
export default List;
