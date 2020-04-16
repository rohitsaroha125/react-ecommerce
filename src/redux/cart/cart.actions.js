export const ToggleCart=state => ({
    type: 'TOGGLE_CART_HIDDEN',
    payload: state
})

export const AddItems=item => ({
    type: 'ADD_ITEMS',
    payload: item
})

export const ClearItem=item => ({
    type: 'CLEAR_ITEM',
    payload: item
})

export const RemoveItem=item => ({
    type: 'REMOVE_ITEM',
    payload: item
})