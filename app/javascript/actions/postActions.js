import {
  GET_POSTS,
  GET_POSTS_DONE,
  GET_POSTS_FAILED
} from 'actionTypes/postActionTypes'

export const getPosts = () => ({
  type: GET_POSTS
})

export const getPostsDone = (posts) => ({
  type: GET_POSTS_DONE,
  posts
})

export const getPostsFailed = (message) => ({
  type: GET_POSTS_FAILED,
  message
})
