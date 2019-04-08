import React, { Component } from 'react';
import Cards from './gridList';
import store from '../store';
import { connect } from 'react-redux';

class ProductList extends Component {
 

    componentWillMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                store.dispatch({ type: 'SET_LIST', payload: result })
            })
    }


    render() {
        if(!this.props.productList.length){
            return <div/>
        }
        return (
            <div>
                <Cards products={this.props.productList} />
            </div>
        );
    }

}

function mapStateToProps({ productList }){
    return {productList};
}

export default connect(mapStateToProps)(ProductList)
