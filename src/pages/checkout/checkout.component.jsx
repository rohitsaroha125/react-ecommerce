import React from 'react'

import './checkout.style.scss'
import { connect } from 'react-redux'

import { selectCartItems, selectTotal } from '../../redux/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import PayStripe from '../../components/stripeButton/stripeButton.component'

const CheckoutPage=({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem}/>
            ))
        }
        <div className="total">
            <span>TOTAL : ${total}</span>
        </div>
        <PayStripe price={total}/>
    </div>
)

const mapStateToProps=(state) => ({
    cartItems: selectCartItems(state),
    total : selectTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)