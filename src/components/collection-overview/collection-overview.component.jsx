import React from 'react'
import './collection-overview.style.scss'

import CollectionPreview from '../collectionPreview/collectionPreview.component'
import ShopSections from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

const CollectionOverview=({collections}) => {
    return(
        collections.map(({ id,title,items }) => (
            <CollectionPreview key={id} title={title} items={items}></CollectionPreview>
        ))
    )
}

const mapStateToProps=state => ({
    collections: ShopSections(state)
})

export default connect(mapStateToProps)(CollectionOverview)

