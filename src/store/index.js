import { createStore } from 'redux'
import reducer from '../reducers'


const initialState = {
    user: { name: 'jake' },
    products: [],
    cart: [
        {
            item: 'item ID here',
            count: 3
        }
    ],
}

const store = createStore(reducer, initialState);

export default store;