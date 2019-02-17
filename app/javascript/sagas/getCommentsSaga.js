import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_COMMENTS } from 'actionTypes/commentActionTypes'
import { getCommentsDone, getCommentsFailed } from 'actions/commentActions'
import getCommentsService from 'services/getCommentsService'

function* getCommentsSaga(action) {
  try {
    const comments = yield call(getCommentsService.bind(this, action.params))
    yield put(getCommentsDone(action.params, comments))

  } catch (err) {
    yield put(getCommentsFailed(err.message))
  }
}

export default function* () { yield takeLatest(GET_COMMENTS, getCommentsSaga) }
