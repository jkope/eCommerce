import store from '../store';

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newCount = action.count ? action.count : 1
            return Object.assign({}, state, {
                cart: [...state.cart, {
                    item: action.item,
                    count: newCount
                }
                ]
            })
        case 'CHANGE_QUANTITY':
            return Object.assign({}, state, {
                cart: state.cart.map((item) => {
                    if (item.item === action.item) {
                        let newCount = item.count
                        if (action.direction === 'increase') {
                            newCount++
                        } else {
                            newCount--
                        }
                        return Object.assign({}, item, {
                            count: newCount
                        })
                    }
                    return item
                })
            })
        case 'SET_USER':
            return Object.assign({}, state, {
                user: { name: action.name }
            })
        case 'SET_LIST':
            return {
                ...state, 
                productList: action.payload
            }
        default:
            return state
    }
}