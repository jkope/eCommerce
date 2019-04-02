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
        case 'GET_LIST':
            var items = [{
                "id": 1,
                "title": "Toshiba - 49” Class – LED - 1080p",
                "description": "Toshiba HDTV Fire TV Edition is a new generation of smart TVs featuring the Fire TV experience built-in and including a Voice Remote with Alexa.",
                "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg",
                "price": 199.99,
                "rating": 4.6,
                "category": "tv"
            },
                {
                    "id": 2,
                    "title": "LG - 75\" Class - LED - UK6190 Series - 2160p",
                    "description": "Stream high-definition shows and watch movies with this LG 4K UHD smart TV. Its quad-core processor ensures a clear picture and reduces distracting video noise, while the webOS lets you connect to popular streaming networks.",
                    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290163_sd.jpg",
                    "price": 999.99,
                    "rating": 4.7,
                    "category": "tv"
                },]
            return Object.assign({}, state, { products: items });
            // fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
            //     .then(res => res.json())
            //     .then(
            //         (result) => {
            //             items = result
            //         },
            //     )
        default:
            return state
    }
}