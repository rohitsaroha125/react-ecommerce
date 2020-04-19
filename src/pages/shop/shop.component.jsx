import React from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import { Route } from 'react-router-dom'

import CategoryPage from '../category/category.component'

const Shoppage=({match}) => {
    console.log(match.path)
        return(
            <div className="shop-page">
            
                <Route exact path={`${match.url}`} component={CollectionOverview} />
                <Route exact path={`${match.url}/:categoryId`} component={CategoryPage} />
            </div>
        )
}

export default Shoppage;