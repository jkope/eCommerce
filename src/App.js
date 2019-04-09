import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PrimarySearchAppBar from './components/searchBar';
import Outlet from './components/outlet';

class App extends Component {

  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <Outlet />
      </div>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
