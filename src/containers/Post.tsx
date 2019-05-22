import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Helmet from 'react-helmet';

import PostComp, { PostProps } from '../components/Post';
import { PostState } from '../reducer';
import { Post } from '../services/models';
import { getPosts } from '../actions/post';

interface StateProps {
  posts: Post[];
  isLoading?: boolean;
}

interface DispatchProps {
  getPostsStart: () => void;
}

type EnhancedPostProps = PostProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ id: string }>;

const mapStateToProps = (state: PostState): StateProps => ({
  posts: state.posts,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getPostsStart: () => getPosts.start({}),
    },
    dispatch,
  );

const PostContainer: FC<EnhancedPostProps> = ({
  posts,
  isLoading,
  getPostsStart,
  match,
}) => {
  const { id } = match.params;

  useEffect(() => {
    getPostsStart();
  }, []);

  let post: any = {};
  post = posts.find(tempPost => tempPost.id === id);

  return (
    <>
      {post ? (
        <>
          <Helmet>
            <title>{post.title}</title>
          </Helmet>
          <div className="contents">
            <div className="container">
              <PostComp
                title={post.title}
                postImageURL={post.imageURL}
                body={post.body}
                createdTime={post.createdTime}
                isLoading={isLoading}
              />
              {/* <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            TOPへ
          </button> */}
            </div>
          </div>
        </>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostContainer),
);
