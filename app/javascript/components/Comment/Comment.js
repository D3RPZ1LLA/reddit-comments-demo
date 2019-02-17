import React from 'react'
import { connect } from 'react-redux'
import Commentable from 'components/Commentable'
import generateCommentableKey from 'helpers/generateCommentableKey'

const Comment = props => {
  let params = { commentable_type: 'comment', commentable_id: props.comment.id }
  let commentableKey = generateCommentableKey({
    commentable_type: 'comment',
    commentable_id: props.comment.id
  })
  let commentIds = Object.keys(props.keys[commentableKey] || {})

  return (
    <div className='comment'>
      <h6 className='username'>Posted by u/{props.comment.author.username}</h6>
      <p className='message'>{props.comment.message}</p>
      <Commentable params={params} commentIds={commentIds} />
    </div>
  )
}

const mapStateToProps = (state) => ({ keys: state.comments.commentableKeys })
export default connect(mapStateToProps)(Comment)
