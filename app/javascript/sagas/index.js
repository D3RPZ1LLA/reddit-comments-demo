import { fork, all } from 'redux-saga/effects'
import getPostsSaga from 'sagas/getPostsSaga'
import getCommentsSaga from 'sagas/getCommentsSaga'
import postCommentSaga from 'sagas/postCommentSaga'

export default function* root() {
  yield all([
    fork(getPostsSaga),
    fork(getCommentsSaga),
    fork(postCommentSaga)
  ])
}
