import { Reducer, combineReducers } from 'redux';

import { PostAction } from './actions/post';
import { RecommendationAction } from './actions/recommendation';
import * as ActionType from './actions/actionTypeConstants';
import { Post, RecommendationModel } from './services/models';

export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error?: any;
}

export const initialPostState: PostState = {
  posts: [],
  isLoading: false,
};

const postReducer: Reducer<PostState, PostAction> = (
  state: PostState = initialPostState,
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

export interface RecommendationState {
  recommendationList: RecommendationModel[];
  isLoading: boolean;
  error?: any;
}

export const initialRecommendationState: RecommendationState = {
  recommendationList: [],
  isLoading: false,
};

const recommendationReducer: Reducer<
  RecommendationState,
  RecommendationAction
> = (
  state: RecommendationState = initialRecommendationState,
  action: RecommendationAction,
): RecommendationState => {
  switch (action.type) {
    case ActionType.GET_RECOMMENDATION_START:
      return {
        ...state,
        recommendationList: [],
        isLoading: true,
      };
    case ActionType.GET_RECOMMENDATION_SUCCEED:
      return {
        ...state,
        recommendationList: action.payload.result.recommendationList,
        isLoading: false,
      };
    case ActionType.GET_RECOMMENDATION_FAIL:
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

const main = combineReducers({
  postReducer,
  recommendationReducer,
});

export default main;
