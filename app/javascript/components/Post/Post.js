import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  let params = { commentable_type: 'post', commentable_id: 'props.post.id' }

  return (
    <div className='post'>
      <h5 className='username'>Posted by u/'props.post.author.username'</h5>
      <h3 className='title'>'props.post.title'</h3>
      <p  className='message'>'props.post.message'</p>
    </div>
  )
}

export default Post
