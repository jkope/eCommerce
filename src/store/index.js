import { createStore } from 'redux'
import reducer from '../reducers'


const initialState = {
    user: { name: 'jake' },
    productList: [],
    cart: [
        {
            item: '82397awedf',
            count: 3
        },
        {
            item: 'lkjq42',
            count: 1
        },
        {
            item: 'i982klasd987',
            count: 2
        },
    ],
}

const store = createStore(reducer, initialState);

export default store;