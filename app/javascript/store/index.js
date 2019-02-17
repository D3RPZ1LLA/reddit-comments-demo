import '@babel/polyfill'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from 'reducers'
import defaultState from 'store/defaultState'

const Store = (preloadedState = {}) => {
  const store = createStore(
    reducers,
    {
      ...defaultState,
      ...preloadedState
    }
  )

  return store
}

export default Store
