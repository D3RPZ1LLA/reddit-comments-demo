import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from 'components/Post'

class PostList extends Component {
  renderPosts () {
    return this.props.postIds.map((postId) => (
      <Post key={ postId } />
    ))
  }

  render() {
    return (
      <div className='posts-list'>
        <h1>Popular posts</h1>
        { this.renderPosts() }
      </div>
    )
  }
}

export default PostList
