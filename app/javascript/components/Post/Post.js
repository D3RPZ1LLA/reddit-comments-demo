import React from 'react'
import { connect } from 'react-redux'
import Commentable from 'components/Commentable'
import getCommentIds from 'helpers/getCommentIds'

const Post = props => {
  let params = { commentable_type: 'post', commentable_id: props.post.id }
  let commentIds = getCommentIds(props.keys, 'post', props.post.id)

  return (
    <div className='post'>
      <h5 className='username'>Posted by u/{ props.post.author.username }</h5>
      <h3 className='title'>{ props.post.title }</h3>
      <p  className='message'>{ props.post.message }</p>
      <Commentable params={ params } commentIds={ commentIds } />
    </div>
  )
}

const mapState = (state) => ({ keys: state.comments.commentableKeys })
export default connect(mapState)(Post)
