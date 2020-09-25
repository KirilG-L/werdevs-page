import { createStore, compose, applyMiddleware } from "redux";
import reducer from '../reducer'

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose


const store = createStore(reducer)
window.store = store

export default store
