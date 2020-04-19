import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store, persiststore } from './redux/store.js'

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persiststore}>
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
