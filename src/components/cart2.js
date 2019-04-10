import React from 'react';
import { connect } from 'react-redux';

const mapStateToListProps = (state) => {
    const list = state.cart.map(i => (
        {
            id: i.item,
            quantity: i.count
        }
    ));
    console.log(list)
    return {
        List
    }
}

const List = props => (
    <div>
        {
            list.map((item, index) => (
                <div
                    key={index}
                
                >
                <div>{item.id}</div>
                <div>{item.quantity}</div>
                </div>
            ))
        }
    </div>
)

// console.log(store.getState());
// store.dispatch({ type: 'ADD_TO_CART', item: 7868786 })
// store.dispatch({ type: 'CHANGE_QUANTITY', item: 7868786, direction: 'increase' })
// store.dispatch({ type: 'CHANGE_QUANTITY', item: 7868786, direction: 'decrease' })
// store.dispatch({ type: 'SET_USER', name: 'ThisNewName' })
// console.log(store.getState());


 const Cart = connect(
    mapStateToListProps)(List);

export default Cart;