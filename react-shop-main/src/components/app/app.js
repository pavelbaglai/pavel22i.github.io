import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import { connect } from 'react-redux';
import ShowHeader from '../shop-header';
import './app.css';

const App = ({ numItems, total }) => {
  return (
    <main role="main" className="container">
      <ShowHeader numItems={numItems} total={total} />
      <Switch>
        <Route 
          path="/"
          component={HomePage}
          exact />
        <Route 
          path="/cart"
          component={CartPage} />
      </Switch>
    </main>
  )
};

const mapStateToProps = ({ cartItems }) => {
  return {
    numItems: cartItems.reduce((a, b) => a + b.count, 0),
    total: cartItems.reduce((a, b) => a + b.total, 0)
  }
}

export default connect(mapStateToProps)(App);