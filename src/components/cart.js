import React, { Component } from 'react';
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
        list
    }
}

const List = props => (
    <div>
        {
            props.list.map((item, index) => (
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


// class Cart extends Component {

//     componentDidMount() {

//         // console.log(store.getState());
//     }

//     render() {
//         return (
//             <div className="App">
//                 testing
//       </div>
//         );
//     }
// }

 const Cart = connect(
    mapStateToListProps)(List);

export default Cart;