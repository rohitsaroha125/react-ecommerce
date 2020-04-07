import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import Shopepage from './pages/shop/shop.component.jsx'
import SigninPage from './pages/signin/signin.component.jsx'
import { auth, createuserDocument } from './firebase/firebase.util'

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

  constructor()
  {
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribe=null

  componentDidMount()
  {
    this.unsubscribe=auth.onAuthStateChanged(async (user) => {
      if(user)
      {
        const userRef=await createuserDocument(user)
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({currentUser:user})
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
      <Header currentUser={this.state.currentUser}></Header>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shopepage} />
        <Route exact path="/signin" component={SigninPage}/>
      </div>
    );
  }
}

export default App;
