import React from 'react'
import './collection-overview.style.scss'

import CollectionPreview from '../collectionPreview/collectionPreview.component'
import ShopSections from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

const CollectionOverview=({collections}) => {
    console.log(Object.entries(collections))
    return( 
        Object.entries(collections).map((collection) => (
            <CollectionPreview key={collection[0]} title={collection[1].title} items={collection[1].items}></CollectionPreview>
        ))
    )
}

const mapStateToProps=state => ({
    collections: ShopSections(state)
})

export default connect(mapStateToProps)(CollectionOverview)

