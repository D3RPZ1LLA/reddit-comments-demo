import {
  GET_COMMENTS_DONE
} from 'actionTypes/commentActionTypes'
import touchState from 'helpers/touchState'
import storeComment from 'helpers/storeComment'

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS_DONE:
      var newState = touchState(state)
      action.comments.forEach((comment) => {
        newState = storeComment(newState, comment)
      })
      return newState

    default:
      return state
  }
}

export default posts
