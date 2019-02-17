import { fork, all } from 'redux-saga/effects'
import getPostsSaga from 'sagas/getPostsSaga'
import getCommentsSaga from 'sagas/getCommentsSaga'

export default function* root() {
  yield all([
    fork(getPostsSaga),
    fork(getCommentsSaga)
  ])
}
