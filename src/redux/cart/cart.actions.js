export const ToggleCart=state => ({
    type: 'TOGGLE_CART_HIDDEN',
    payload: state
})

export const AddItems=item => ({
    type: 'ADD_ITEMS',
    payload: item
})