import React from 'react'

import './cart-dropdown.style.scss'
import CustomButton from '../customButton/customButton.component.jsx'

const CartDropdown=() => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton type="button" value="GO TO CHECKOUT"/>
    </div>
)

export default CartDropdown