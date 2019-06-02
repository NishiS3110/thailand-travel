import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Helmet from 'react-helmet';

import SubMenu, { RecommendationProps } from '../components/SubMenu';
import SiteInformationComp from '../components/SiteInformation';

import { RecommendationState } from '../reducer';
import { RecommendationModel } from '../services/models';
import { getRecommendation } from '../actions/recommendation';

interface StateProps {
  recommendationList: RecommendationModel[];
  isRecommendationLoading?: boolean;
}

// combineReducersでで階層が変わる
interface WrappedState {
  recommendationReducer: RecommendationState;
}

interface DispatchProps {
  getRecommendationStart: () => void;
}

type EnhancedSiteInformationProps = RecommendationProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{}>;

const mapStateToProps = (state: WrappedState): StateProps => ({
  recommendationList: state.recommendationReducer.recommendationList,
  isRecommendationLoading: state.recommendationReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getRecommendationStart: () => getRecommendation.start({}),
    },
    dispatch,
  );

const SiteInformationContainer: FC<EnhancedSiteInformationProps> = ({
  recommendationList,
  isRecommendationLoading,
  getRecommendationStart,
  match,
}) => {
  useEffect(() => {
    getRecommendationStart();
  }, []);

  return (
    <>
      <Helmet>
        <title>サイト情報</title>
      </Helmet>
      <div className="contents">
        <div className="container">
          <SiteInformationComp />
          <SubMenu
            recommendationList={recommendationList}
            isLoading={isRecommendationLoading}
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SiteInformationContainer),
);
