import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import rootReducer from './root.reducer.js'

import { persistStore } from 'redux-persist'

const middleware=[logger]

export const store=createStore(rootReducer,applyMiddleware(...middleware ))

export const persiststore=persistStore(store)