import React from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import { Route } from 'react-router-dom'

import CategoryPage from '../category/category.component'

import { firestore, convertCollections } from '../../firebase/firebase.util.js'
import {connect} from 'react-redux'

import {updateCollection} from '../../redux/shop/shop.action'
import withSpinner from '../../components/with-spinner/with-spinner.component'

const Collection_overview=withSpinner(CollectionOverview)
const Category_page=withSpinner(CategoryPage)

class Shoppage extends React.Component {

    state={
        loading:true
    }

    unsubscribeFromSnapshot=null

    componentDidMount(){
        const {updateCollection}=this.props
        const collectionRef=firestore.collection('collection')
        this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot => {
           const collectionMap=convertCollections(snapshot)
           updateCollection(collectionMap)
           this.setState({loading: false})
        })
    }

    render()
    {
        const {match}=this.props
        const { loading }=this.state
    console.log(match.path)
        return(
            <div className="shop-page">
            
                <Route exact path={`${match.url}`} render={(props) => <Collection_overview isloading={loading} {...props}/>} />
                <Route exact path={`${match.url}/:categoryId`} render={(props) => <Category_page isloading={loading} {...props} />} />
            </div>
        )
        }
}

const mapDispatchToProps=dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shoppage);