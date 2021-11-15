import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import { fetchBooks, onAddedToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list"> 
      { books.map(book => {
        return ( 
          <li key={book.id}>
            <BookListItem 
            book={book} 
            onAddedToCart={() => onAddedToCart(book.id)}/>
          </li> )
        })
      }
    </ul>)
};

class BookListContainer extends React.Component {
  
  componentDidMount() {

    this.props.fetchBooks()

  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(onAddedToCart(id))
  }
};

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));