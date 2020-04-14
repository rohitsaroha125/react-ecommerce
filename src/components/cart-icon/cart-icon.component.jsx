import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'

import { connect } from 'react-redux'
import { ToggleCart } from '../../redux/cart/cart.actions.js'
import { selectQuantity } from '../../redux/cart/cart.selector.js'

import './cart-icon.style.scss'

const ShoppingCart=({ToggleCart, itemCount}) => (
    <div className="cart-icon" onClick={ToggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const dispatchToProps=dispatch => ({
    ToggleCart : () => dispatch(ToggleCart())
})

const matchStateToProps=(state) => ({
    itemCount: selectQuantity(state)
})

export default connect(matchStateToProps,dispatchToProps)(ShoppingCart)