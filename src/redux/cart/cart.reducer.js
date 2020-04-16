import { addItemstoCart, removeItemsfromCart } from './cart.util.js'

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
        case 'CLEAR_ITEM':
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id!==action.payload.id )
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                cartItems: removeItemsfromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer