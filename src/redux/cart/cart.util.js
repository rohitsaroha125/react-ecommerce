export const addItemstoCart=(cartItems, cartItemToAdd) => {
    const existingItem=cartItems.find(cartItem => cartItem.id==cartItemToAdd.id)

    if(existingItem)
    {
        return cartItems.map(cartItem => cartItem.id==cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]

}

export const removeItemsfromCart=(cartItems, cartItemtoRemove) => {
    const existingItem=cartItems.find(cartItem => cartItem.id===cartItemtoRemove.id)

    if(existingItem.quantity==1)
    {
        return cartItems.filter(cartItem => cartItem.id!==cartItemtoRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id===cartItemtoRemove.id ? {...cartItem,quantity: cartItem.quantity-1} : cartItem)

}