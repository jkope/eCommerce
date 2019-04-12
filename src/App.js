import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PrimarySearchAppBar from './components/searchBar';
import Outlet from './components/outlet';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <div>
        <div className='head'>
          <PrimarySearchAppBar />
        </div>
        <div className='main'>
          <Outlet />
        </div>
        <div className='foot'>
          <Footer />
        </div>
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
