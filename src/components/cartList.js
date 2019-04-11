import React, { Component } from 'react';
import CartItem from './CartItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import store from '../store';


const mapStateToProps=(state) => {
  return {  cartList: state.cart }
}



class CartList extends Component {
    checkOut = () => {
        store.dispatch({ type: 'CHECKOUT' })
    }
    
    render() {
        console.log(this.props.cartList)
        const list = this.props.cartList.map((prod) => (
        <List key={prod.item.id} component="nav">
            <CartItem product={prod} />
            <Divider />
        </List>
        ))
       return (
        <div>
            <div onClick={this.checkOut}>
                Checkout
            </div>
            {list}
        </div>
    );
    }
}



export default connect(mapStateToProps)(CartList);