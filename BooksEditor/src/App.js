import React from 'react';
import HeaderContainer from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import BodyContainer from './components/Body/Body';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <HeaderContainer />
        <BodyContainer />
      </div>
    </Provider>
  );
}

export default App;
