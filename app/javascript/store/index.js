import '@babel/polyfill'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from 'reducers'
import sagas from 'sagas'
import defaultState from 'store/defaultState'

const Store = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    {
      ...defaultState,
      ...preloadedState
    },
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(sagas)

  return store
}

export default Store
