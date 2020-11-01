import { applyMiddleware, createStore } from "redux";

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from "./reducers.js";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = applyMiddleware(thunk, multi ,promise)(createStore)(reducers, devTools);

// applyMiddleware server para aplicar middlewares no caso são esses: {
// import promise from 'redux-promise'
// import multi from 'redux-multi'
// import thunk from 'redux-thunk'
// } 
// que servem para esperar promises

// a constante devTools serve para pegar o valor de REDUX_DEVTOOLS_EXTENSION na página conhecida também como window

// a constante Store aplica os middlewares e cria a store passando os reducers e devtools