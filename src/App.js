import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './store';


// console.log(store.getState());
// store.dispatch({ type: 'ADD_TO_CART', item: 7868786 })
// store.dispatch({ type: 'CHANGE_QUANTITY', item: 7868786, direction: 'increase' })
// store.dispatch({ type: 'CHANGE_QUANTITY', item: 7868786, direction: 'decrease' })
// store.dispatch({ type: 'SET_USER', name: 'ThisNewName' })
// console.log(store.getState());

class App extends Component {

  render() {
    return (
      <Cart />
    );
  }
}

const WrappedApp = () => (
  <Provider store = {store}>
    <App/>
  </Provider>
);

export default WrappedApp;
