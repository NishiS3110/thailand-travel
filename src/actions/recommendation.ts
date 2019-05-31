import { RecommendationModel } from '../services/models';
import * as ActionType from './actionTypeConstants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GetRecommendationParams {}
interface GetRecommendationResult {
  recommendationList: RecommendationModel[];
}

export const getRecommendation = {
  start: (params: GetRecommendationParams) => ({
    type: ActionType.GET_RECOMMENDATION_START as typeof ActionType.GET_RECOMMENDATION_START,
    payload: params,
  }),

  succeed: (
    params: GetRecommendationParams,
    result: GetRecommendationResult,
  ) => ({
    type: ActionType.GET_RECOMMENDATION_SUCCEED as typeof ActionType.GET_RECOMMENDATION_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetRecommendationParams, error: any) => ({
    type: ActionType.GET_RECOMMENDATION_FAIL as typeof ActionType.GET_RECOMMENDATION_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type RecommendationAction =
  | ReturnType<typeof getRecommendation.start>
  | ReturnType<typeof getRecommendation.succeed>
  | ReturnType<typeof getRecommendation.fail>;
