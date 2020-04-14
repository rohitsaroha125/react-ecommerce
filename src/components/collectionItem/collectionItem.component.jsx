import React from 'react'
import './collectionItem.style.scss'
import { connect } from 'react-redux'

import { AddItems } from '../../redux/cart/cart.actions.js'

import CustomButton from '../customButton/customButton.component.jsx'

const CollectionItem=({item,AddItems}) => {

    const {name, price,imageUrl} = item

    return(
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="collection-footer">
<span className="name">{name}</span>
<span className="price">{price}$</span>
            </div>
            <CustomButton value="ADD TO CART" inverted item={item} click handleClick={() => AddItems(item)}/>
        </div>
    )
}

const mapDispatchToProps=(dispatch) => ({
    AddItems: item => dispatch(AddItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);