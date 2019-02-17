import {
  GET_POSTS,
  GET_POSTS_DONE,
  GET_POSTS_FAILED
} from 'actionTypes/postActionTypes'

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_DONE:
      let list = {}
      action.posts.forEach((post) => {
        list[post.id] = post
      })
      return {
        ...state,
        list: list
      }

    case GET_POSTS_FAILED:
      return state

    default:
      return state
  }
}

export default posts
