import {
  GET_COMMENTS,
  GET_COMMENTS_DONE,
  GET_COMMENTS_FAILED
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
