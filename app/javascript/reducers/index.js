import { combineReducers } from 'redux'
import postsReducers from 'reducers/postsReducers'
import commentsReducers from 'reducers/commentsReducers'

const rootReducer = combineReducers({
  postsReducers,
  commentsReducers
})

export default rootReducer
