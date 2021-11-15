import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShowHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to='/'>
        <div className="logo text-dark">ReStore</div>     
      </Link>
      <Link to='/cart'>
        <div className="shopping-cart text-dark">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} {numItems <= 1 ? 'book' : 'books'} {total}$ 
        </div>
      </Link>
    </header>
  )
};

export default ShowHeader;