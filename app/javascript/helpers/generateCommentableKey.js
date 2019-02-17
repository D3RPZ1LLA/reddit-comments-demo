export default (params) => {
  return `${ params.commentable_type.toLowerCase() }:${ params.commentable_id }`
}
