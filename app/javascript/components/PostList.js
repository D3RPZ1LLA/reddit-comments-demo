import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PostList extends Component {
  renderPosts () {
    return (
      <div></div>
    )
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
