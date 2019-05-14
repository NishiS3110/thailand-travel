import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/actionTypeConstants';
import { getPosts } from '../actions/post';

import rsf from '../plugins/firebase';

import { Post } from '../services/models';

function* runGetPosts(action: ReturnType<typeof getPosts.start>) {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'posts');
    const posts: Post[] = [];
    snapshot.forEach((post: any) => {
      const tempPost: Post = {
        id: post.id,
        title: post.data().title,
        imageURL: post.data().imageURL,
        body: post.data().body,
        createdTime: post.data().createdTime,
        updatedTime: post.data().updatedTime,
      };
      posts.push(tempPost);
    });

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
