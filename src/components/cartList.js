import React from 'react';
import CartItem from './CartItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const CartList = (props) => {
    const list = props.cartList.map((prod) => (

        <List component="nav">
            <CartItem product={prod} />
            <Divider />
        </List>
    ))
    return (
        <div>
            {list}
        </div>
    );
}



export default CartList;