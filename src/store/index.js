import { createStore } from 'redux'
import reducer from '../reducers'


const initialState = {
    user: { name: 'jake' },
    cart: [
        {
            item: 'item ID here',
            count: 'Quantity here'
        }
    ],
}

const store = createStore(reducer, initialState);

export default store;