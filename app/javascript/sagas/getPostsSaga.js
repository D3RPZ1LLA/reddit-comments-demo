import { takeLatest, put, call } from 'redux-saga/effects'

import { GET_POSTS } from 'actionTypes/postActionTypes'
import { getPostsDone, getPostsFailed } from 'actions/postActions'
import getPostsService from 'services/getPostsService'

function* getPostsSaga() {
  try {
    const posts = yield call(getPostsService)
    yield put(getPostsDone(posts))

  } catch (err) {
    yield put(getPostsFailed(err.message))
  }
}

export default function* (params) { yield takeLatest(GET_POSTS, getPostsSaga) }
