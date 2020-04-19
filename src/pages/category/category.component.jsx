import React from 'react'

import { connect } from 'react-redux'

import './category.style.scss'
import CollectionItem from '../../components/collectionItem/collectionItem.component'
import { SelectCategory } from '../../redux/shop/shop.selector'

const CategoryPage=({collection}) => {
    const {title, items}=collection;
    return(
        <div className="category">
<h2 className="title">{title}</h2>
<div className="items">
        {
            items.map(item => <CollectionItem key={item.id} item={item} />)
        }
    </div>
            </div>
    )
}

const mapStateToProps=(state, ownProps) => ({
    collection: SelectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)