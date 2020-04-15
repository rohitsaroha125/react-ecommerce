import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectHidden } from '../../redux/cart/cart.selector.js'
import { selectCurrentUser } from '../../redux/user/user.selector.js'

import ShoppingCart from '../cart-icon/cart-icon.component.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx'

const Header=({currentUser, hidden}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
            <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ? (
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    ):(
                        <Link className="option" to="/signin">SIGN IN</Link>
                    )
                }
                <ShoppingCart/>
            </div>
            {
                hidden ? console.log("hello") : (<CartDropdown />)
            }
        </div>
    )
}

const maptoprops=state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state)
})

export default connect(maptoprops)(Header);