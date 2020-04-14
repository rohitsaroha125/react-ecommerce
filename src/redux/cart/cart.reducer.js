import { addItemstoCart } from './cart.util.js'

const INITIAL_STATE={
    hidden: true,
    cartItems:[]
}

const CartReducer=(state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEMS':
            return{
                ...state,
                cartItems: addItemstoCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer