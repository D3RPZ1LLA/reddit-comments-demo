import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from 'actions/commentActions'
import Comment from 'components/Comment'

class Commentable extends Component {
  constructor (props) {
    super(props)
    this.state = { showComments: false }
  }

  toggleComments () {
    let showComments = !this.state.showComments
    if (showComments) { this.props.dispatch(getComments(this.props.params)) }
    this.setState({ showComments: showComments })
  }

  renderComments () {
    return this.props.commentIds.map((commentId) => (
      <Comment key={ commentId } comment={ this.props.comments[commentId] } />
    ))
  }

  render () {
    let commentsMessage = `${this.state.showComments ? 'hide' : 'show'} comments`
    return (
      <div className='commentable'>
        <div className='comments-message' onClick={ this.toggleComments.bind(this) }>
          { commentsMessage }
        </div>
        <div className='comment-list'>
          { this.state.showComments && this.renderComments() }
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({ comments: state.comments.list })
export default connect(mapState)(Commentable)
