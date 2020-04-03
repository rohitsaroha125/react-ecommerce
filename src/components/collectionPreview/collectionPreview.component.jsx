import React from 'react'
import './collectionPreview.style.scss'

import CollectionItem from '../collectionItem/collectionItem.component.jsx'

const CollectionPreview=({id,title, items}) => {
    return(<div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(({id, name, imageUrl, price}) => (
                    <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price}></CollectionItem>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;