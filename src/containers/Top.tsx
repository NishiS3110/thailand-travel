import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Helmet from 'react-helmet';

import HeroImage from '../components/HeroImage';
import TopPost, { TopPostProps } from '../components/TopPost';
import { Post } from '../services/models';
import { PostState } from '../reducer';
import { getPosts } from '../actions/post';

interface StateProps {
  posts: Post[];
  isLoading?: boolean;
}

// combineReducersでで階層が変わる
interface WrappedPostState {
  postReducer: PostState;
}

interface DispatchProps {
  getPostsStart: () => void;
}

type EnhancedTopPostProps = TopPostProps &
  StateProps &
  DispatchProps &
  RouteComponentProps;

const mapStateToProps = (state: WrappedPostState): StateProps => ({
  posts: state.postReducer.posts,
  isLoading: state.postReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getPostsStart: () => getPosts.start({}),
    },
    dispatch,
  );

const TopContainer: FC<EnhancedTopPostProps> = ({
  posts,
  isLoading,
  getPostsStart,
  match,
}) => {
  useEffect(() => {
    getPostsStart();
  }, []);

  return (
    <>
      <Helmet>
        <title>タイ旅行記 ~ただひたすらに寺院を巡って~</title>
      </Helmet>
      <HeroImage post={posts[0]} />
      <TopPost posts={posts} isLoading={isLoading} />
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopContainer),
);
