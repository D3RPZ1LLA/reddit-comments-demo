import { takeLatest, put, call } from 'redux-saga/effects'

import { POST_COMMENT } from 'actionTypes/commentActionTypes'
import { postCommentDone, postCommentFailed } from 'actions/commentActions'
import postCommentService from 'services/postCommentService'

function* callPostComment(action) {
  try {
    const comment = yield call(postCommentService.bind(this, action.params))
    yield put(postCommentDone(comment))

  } catch (err) {
    yield put(postCommentFailed(err.message))
  }
}

export default function* () { yield takeLatest(POST_COMMENT, callPostComment) }
