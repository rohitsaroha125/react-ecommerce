import React from 'react'
import './collectionPreview.style.scss'

import CollectionItem from '../collectionItem/collectionItem.component.jsx'

const CollectionPreview=({id,title, items}) => {
    return(<div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;