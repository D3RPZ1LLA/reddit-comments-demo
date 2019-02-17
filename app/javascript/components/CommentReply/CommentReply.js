import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postComment } from 'actions/commentActions'

class CommentReply extends Component {
  constructor (props) {
    super(props)
    this.state = { message: '' }
  }

  postComment (e) {
    e.preventDefault()
    let message = this.state.message
    this.props.dispatch(postComment({ ...this.props.params, message }))
    this.setState({ message: '' })
  }

  setMessage (e) { this.setState({ message: e.target.value }) }

  render () {
    return (
      <form className='comment-reply' onSubmit={ this.postComment.bind(this) }>
        <input type='text' placeholder='comment...'
         onChange={ this.setMessage.bind(this) }
         value={ this.state.message } />
        <input type='submit' value='Post' />
      </form>
    )
  }
}

export default connect()(CommentReply)
