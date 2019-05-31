import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Helmet from 'react-helmet';

import PostComp, { PostProps } from '../components/Post';
import SubMenu, { RecommendationProps } from '../components/SubMenu';

import { PostState, RecommendationState } from '../reducer';
import { Post, RecommendationModel } from '../services/models';
import { getPosts } from '../actions/post';
import { getRecommendation } from '../actions/recommendation';

interface StateProps {
  posts: Post[];
  recommendationList: RecommendationModel[];
  isLoading?: boolean;
  isRecommendationLoading?: boolean;
}

// combineReducersでで階層が変わる
interface WrappedPostState {
  postReducer: PostState;
  recommendationReducer: RecommendationState;
}

interface DispatchProps {
  getPostsStart: () => void;
  getRecommendationStart: () => void;
}

type EnhancedPostProps = PostProps &
  RecommendationProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ id: string }>;

const mapStateToProps = (state: WrappedPostState): StateProps => ({
  posts: state.postReducer.posts,
  recommendationList: state.recommendationReducer.recommendationList,
  isLoading: state.postReducer.isLoading,
  isRecommendationLoading: state.recommendationReducer.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getPostsStart: () => getPosts.start({}),
      getRecommendationStart: () => getRecommendation.start({}),
    },
    dispatch,
  );

const PostContainer: FC<EnhancedPostProps> = ({
  posts,
  recommendationList,
  isLoading,
  isRecommendationLoading,
  getPostsStart,
  getRecommendationStart,
  match,
}) => {
  const { id } = match.params;

  useEffect(() => {
    getPostsStart();
    getRecommendationStart();
  }, []);

  let post: any = {};
  post = posts.find(tempPost => tempPost.id === id);

  return (
    <>
      {post && (
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
      )}
      <div className="contents">
        <div className="container">
          {post ? (
            <PostComp
              title={post.title}
              postImageURL={post.imageURL}
              body={post.body}
              createdTime={post.createdTime}
              isLoading={isLoading}
            />
          ) : (
            <div className="loader">Loading...</div>
          )}
          {recommendationList ? (
            <SubMenu
              recommendationList={recommendationList}
              isLoading={isRecommendationLoading}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostContainer),
);
