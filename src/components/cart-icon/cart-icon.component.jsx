import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

import { connect } from 'react-redux'
import { ToggleCart } from '../../redux/cart/cart.actions.js'

import './cart-icon.style.scss'

const ShoppingCart=({ToggleCart}) => (
    <div className="cart-icon" onClick={ToggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const dispatchToProps=dispatch => ({
    ToggleCart : () => dispatch(ToggleCart())
})

export default connect(null,dispatchToProps)(ShoppingCart)