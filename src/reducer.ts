import { Reducer } from 'redux';

import { PostAction } from './actions/post';
import * as ActionType from './actions/actionTypeConstants';
import { Post } from './services/models';

export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error?: any;
}

export const initialState: PostState = {
  posts: [],
  isLoading: false,
};

const postReducer: Reducer<PostState, PostAction> = (
  state: PostState = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case ActionType.GET_POSTS_START:
      return {
        ...state,
        posts: [],
        isLoading: true,
      };
    case ActionType.GET_POSTS_SUCCEED:
      return {
        ...state,
        posts: action.payload.result.posts,
        isLoading: false,
      };
    case ActionType.GET_POSTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default postReducer;
