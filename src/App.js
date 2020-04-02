import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'

const HatsPage=() => {
  return(
    <div>
    <Link to="/">Homepage</Link>
    <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
