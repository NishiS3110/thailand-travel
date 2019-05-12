import { Post } from '../services/models';
import * as ActionType from './actionTypeConstants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GetPostsParams {}
interface GetPostsResult {
  posts: Post[];
}

export const getPosts = {
  start: (params: GetPostsParams) => ({
    type: ActionType.GET_POSTS_START as typeof ActionType.GET_POSTS_START,
    payload: params,
  }),

  succeed: (params: GetPostsParams, result: GetPostsResult) => ({
    type: ActionType.GET_POSTS_SUCCEED as typeof ActionType.GET_POSTS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetPostsParams, error: any) => ({
    type: ActionType.GET_POSTS_FAIL as typeof ActionType.GET_POSTS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type PostAction =
  | ReturnType<typeof getPosts.start>
  | ReturnType<typeof getPosts.succeed>
  | ReturnType<typeof getPosts.fail>;
