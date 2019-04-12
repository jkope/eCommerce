import React, { Component } from 'react';
import CartItem from './CartItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import store from '../store';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const mapStateToProps = (state) => {
    return { cartList: state.cart }
}



class CartList extends Component {
    checkOut = () => {
        store.dispatch({ type: 'CHECKOUT' })
    }

    render() {
        const list = this.props.cartList.map((prod) => (
            <List key={prod.item.id} component="nav">
                <CartItem product={prod} />
                <Divider />
            </List>
        ))
        return (
            <div>
                <Button >
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        Checkout
                    </Link>
                </Button>

                <div>
                    {list}
                </div>
            </div>
        );
    }
}



export default connect(mapStateToProps)(CartList);