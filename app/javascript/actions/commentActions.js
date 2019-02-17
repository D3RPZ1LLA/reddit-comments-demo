import {
  GET_COMMENTS,
  GET_COMMENTS_DONE,
  GET_COMMENTS_FAILED,
  POST_COMMENT,
  POST_COMMENT_DONE,
  POST_COMMENT_FAILED
} from 'actionTypes/commentActionTypes'

export const getComments = (params) => ({
  type: GET_COMMENTS,
  params
})

export const getCommentsDone = (params, comments) => ({
  type: GET_COMMENTS_DONE,
  params,
  comments
})

export const getCommentsFailed = (message) => ({
  type: GET_COMMENTS_FAILED,
  message
})

export const postComment = (params) => ({
  type: POST_COMMENT,
  params
})

export const postCommentDone = (comment) => ({
  type: POST_COMMENT_DONE,
  comment
})

export const postCommentFailed = (message) => ({
  type: POST_COMMENT_FAILED,
  message
})
