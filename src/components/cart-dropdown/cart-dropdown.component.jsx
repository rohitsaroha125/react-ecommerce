import React from 'react'

import './cart-dropdown.style.scss'
import CustomButton from '../customButton/customButton.component.jsx'
import { connect } from 'react-redux'
import { CartItemComp } from '../cart-item/cart-item.component.jsx'
import { selectCartItems } from '../../redux/cart/cart.selector.js' 

const CartDropdown=({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {cartItems.map((item) => (
            < CartItemComp key={item.id} item={item} />
        ))}
        </div>
        <CustomButton type="button" value="GO TO CHECKOUT"/>
    </div>
)

const mapStateToProps=(state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)