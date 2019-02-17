import { fork, all } from 'redux-saga/effects'
import getPostsSaga from 'sagas/getPostsSaga'

export default function* root() {
  yield all([
    fork(getPostsSaga)
  ])
}
