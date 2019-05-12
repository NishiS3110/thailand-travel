import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/actionTypeConstants';
import { getPosts } from '../actions/post';

import { Post } from '../services/models';

function* runGetPosts(action: ReturnType<typeof getPosts.start>) {
  try {
    const posts: Post[] = [];

    yield put(getPosts.succeed({}, { posts }));
  } catch (error) {
    yield put(getPosts.fail({}, error));
  }
}

export function* watchGetPosts() {
  yield takeLatest(Action.GET_POSTS_START, runGetPosts);
}

export default function* rootSaga() {
  yield all([fork(watchGetPosts)]);
}
