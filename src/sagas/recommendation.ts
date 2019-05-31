import { call, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/actionTypeConstants';
import { getRecommendation } from '../actions/recommendation';

import rsf from '../plugins/firebase';

import { RecommendationModel } from '../services/models';

function* runGetRecommendation(
  action: ReturnType<typeof getRecommendation.start>,
) {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'recommendation');
    const recommendationList: RecommendationModel[] = [];
    snapshot.forEach((recommendation: any) => {
      const tempRecommendation: RecommendationModel = {
        id: recommendation.id,
        title: recommendation.data().title,
        imageURL: recommendation.data().imageURL,
        createdTime: recommendation.data().createdTime,
        updatedTime: recommendation.data().updatedTime,
      };
      recommendationList.push(tempRecommendation);
    });

    yield put(getRecommendation.succeed({}, { recommendationList }));
  } catch (error) {
    yield put(getRecommendation.fail({}, error));
  }
}

export function* watchGetRecommendation() {
  yield takeLatest(Action.GET_RECOMMENDATION_START, runGetRecommendation);
}
