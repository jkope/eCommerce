import React, { Component } from 'react';
import Cards from './gridList';
import store from '../store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


function mapStateToProps(state) {
    return {
        productList: state.productList,
        searchString: state.searchString,
        userName: state.userName
    };
}

class ProductList extends Component {


    componentWillMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            .then(res => res.json())
            .then(result => {
                store.dispatch({ type: 'SET_LIST', payload: result })
            })
    }


    render() {
        if (!this.props.userName) {
            return <Redirect to='/signin' />
        }
        let filteredList = this.props.productList.filter(item => {
            return item.title.toLowerCase().indexOf(this.props.searchString) !== -1 || item.description.toLowerCase().indexOf(this.props.searchString) !== -1
        })
        return (
            <div>
                <Cards products={filteredList} />
            </div>
        );
    }

}


export default connect(mapStateToProps)(ProductList)
