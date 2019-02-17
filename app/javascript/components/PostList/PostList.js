import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/postActions'
import Post from 'components/Post'

class PostList extends Component {
  componentDidMount () { this.props.dispatch(getPosts()) }

  renderPosts () {
    return this.props.postIds.map((postId) => (
      <Post key={ postId } post={ this.props.posts[postId] } />
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

const mapStateToProps = (state) => ({
  postIds: Object.keys(state.posts.list),
  posts: state.posts.list
})
export default connect(mapStateToProps)(PostList)
