import React from 'react'
import './cart-item.style.scss'

export const CartItemComp=({item: {imageUrl,name,price,quantity}}) => (
        <div className="cart-item">
            <img src={imageUrl} alt="cart-item" />
            <div className="item-details">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
)