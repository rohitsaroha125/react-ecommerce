import React from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Homepage from './pages/homepage/homepage.component'
import Shopepage from './pages/shop/shop.component.jsx'
import SigninPage from './pages/signin/signin.component.jsx'
import { auth, createuserDocument } from './firebase/firebase.util'
import { setCurrentuser } from './redux/user/user.actions.js'


import Header from './components/header/header.component.jsx'

const HatsPage=() => {
  return(
    <div>
    <Link to="/">Homepage</Link>
    <h1>Hats Page</h1>
    </div>
  )
}

class App extends React.Component {

  unsubscribe=null

  componentDidMount()
  {

    const {setCurrentuser}=this.props

    this.unsubscribe=auth.onAuthStateChanged(async (user) => {
      if(user)
      {
        const userRef=await createuserDocument(user)
        userRef.onSnapshot((snapshot) => {
          setCurrentuser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }
      setCurrentuser(user)
    })
  }

  componentWillUnmount()
  {
    this.unsubscribe();
  }

/*

  unsubscribe=null

  componentDidMount()
  {
      this.unsubscribe=auth.onAuthStateChanged(async (user) => {
        if(user)
        {
          const userRef=await createuserDocument(user);

          userRef.onSnapshot((snapshot) => {
            this.setState({
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            },() => {
              console.log(this.state)
            })
          })
        }
        this.setState({currentUser: user})
      })
  }

  componentWillUnmount()
  {
    this.unsubscribe();
  }

*/

  render()
  {
    return (
      <div>
      <Header></Header>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shopepage} />
        <Route exact path="/signin" render={ () => this.props.currentUser ? (<Redirect to="/" />) : (<SigninPage />) }/>
      </div>
    );
  }
}

const mapStateToProps=({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchtoProps=dispatch => ({
  setCurrentuser : user => dispatch(setCurrentuser(user))
})

export default connect(mapStateToProps,mapDispatchtoProps)(App);
