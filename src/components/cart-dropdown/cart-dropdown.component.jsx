import React from 'react'

import './cart-dropdown.style.scss'
import CustomButton from '../customButton/customButton.component.jsx'
import { connect } from 'react-redux'
import { CartItemComp } from '../cart-item/cart-item.component.jsx'
import { selectCartItems } from '../../redux/cart/cart.selector.js' 

import { ToggleCart } from '../../redux/cart/cart.actions'

import { withRouter } from 'react-router-dom'

const CartDropdown=({cartItems, history, ToggleCart}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
        cartItems.length ?
        (cartItems.map((item) => (
            < CartItemComp key={item.id} item={item} />
        ))) : (<span className="empty-message">Your Cart is empty</span>)
        }
        </div>
        <CustomButton click handleClick={() => { history.push('/checkout');
         ToggleCart() }} type="button" value="GO TO CHECKOUT"/>
    </div>
)

const mapStateToProps=(state) => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps=(dispatch) => ({
    ToggleCart: () => dispatch(ToggleCart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))