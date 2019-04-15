import React, { Component } from 'react';
import CartItem from './CartItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import store from '../store';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './cartList.css';


const mapStateToProps = (state) => {
    return { cartList: state.cart }
}



class CartList extends Component {

    count = () => {
        if (this.props.cartList.length) {
            return (this.props.cartList.reduce((a, b) => ({ count: a.count + b.count })).count);
        }
    }
    total = () => {
        if (this.props.cartList.length) {
            let total = 0;
            this.props.cartList.forEach(element => {
                total += element.item.price * element.count
            });
            return total
        }
    }

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
        if(this.props.cartList.length){
            return (
    
                <div>
                    <div className='row marg'>
                        <div className='row'>
                            <div>Total Items</div>
                            <div className='padLeft'>{this.count()}</div>
                        </div>
                        <div className='row'>
                            <div>Subtotal $</div>
                            <div className='padLeft'>{this.total()}</div>
                        </div>
    
                        <Link to="/checkedout" style={{ textDecoration: 'none', color: 'inherit' }} >
                            <Button
                                onClick={this.checkOut}>
                                Continue to checkout
                            </Button>
                        </Link>
                    </div>
    
                    <div>
                        {list}
                    </div>
                </div>
            );
        } else {
            return (
                <div className='middle'>
                    <h3>You have no items in your cart.</h3>
                </div>
            )
        }
    }
}



export default connect(mapStateToProps)(CartList);