

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload: newBooks
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
    payload: error
  }
};

export const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());                             // loading: true спинер
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data))) //дистпатч в стор
    .catch((err) => dispatch(booksError(err)))
};

export const onAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
};
export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookId
  }
};
export const allBooksRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVE_FROM_CART',
    payload: bookId
  }
};