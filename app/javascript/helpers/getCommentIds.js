import generateCommentableKey from 'helpers/generateCommentableKey'

export default (keys, type, id) => {
  let key = generateCommentableKey({
    commentable_type: type,
    commentable_id: id
  })
  return Object.keys(keys[key] || {})
}
