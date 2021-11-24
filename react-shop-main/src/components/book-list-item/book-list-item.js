import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, image } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={image} alt='cover'></img>
      </div>
      <div className="book-details">
        <span href="#" className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}$</div>
        <button 
          onClick={onAddedToCart}
          className='btn btn-info add-to-cart'>
          Add to cart
        </button>
      </div>
    </div>
  )
};

export default BookListItem;