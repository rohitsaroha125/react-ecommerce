import React, { Component } from 'react'
import Shopdata from './shop.data.js'
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component.jsx'


class Shoppage extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            collections: Shopdata
        }
    }

    render()
    {
        const { collections }=this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({ id,title,items }) => (
                        <CollectionPreview key={id} title={title} items={items}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default Shoppage;