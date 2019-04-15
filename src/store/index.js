import { createStore } from 'redux'
import reducer from '../reducers'


const initialState = {
    userName: 'J',
    searchString: '',
    productList: [ ],
    cart: [ ],
}

const store = createStore(reducer, initialState);

export default store; 