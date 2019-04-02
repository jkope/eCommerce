import React, { Component } from 'react';
import TitleBarGridList from './gridList';
import store from '../store';

class ProductList extends Component {

    componentDidMount() {
        // store.dispatch({ type: 'GET_LIST'})
        // console.log(store.getState())
        

    }
    render() {
        return (
            <div>
            <TitleBarGridList 
            // tileData={[{title:'first'},{title:'second'}]}
            />
            </div>
        );
    }

}

export default ProductList;