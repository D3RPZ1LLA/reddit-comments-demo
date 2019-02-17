import generateCommentableKey from 'helpers/generateCommentableKey'

export default (state, comment) => {
  let list = state.list, commentableKeys = state.commentableKeys

  list[comment.id] = comment
  let ck = generateCommentableKey({
    commentable_type: comment.commentable_type,
    commentable_id: comment.commentable_id
  })
  commentableKeys[ck] = commentableKeys[ck] || {}
  commentableKeys[ck][comment.id] = true

  return {
    ...state,
    list,
    commentableKeys
  }
}
