import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Helmet from 'react-helmet';

import Post from '../components/Post';

type PostProps = {} & RouteComponentProps<{ id: string }>;

const PostContainer: FC<PostProps> = ({ history, match }) => {
  // eslint-disable-next-line
  const targetId = match.params.id;

  const title = 'test1';
  const postImageURL = '';
  const body =
    '<p>タイ旅行の写真です。</p><p>このスポット寺院です。</p><p>寺院ではありますが、金色の外装なので明るく豪華な印象を受けます。各国からの観光客が多く、祈りを落ち着いて捧げることは難しそうでした。</p>';
  const createdTime = '2019-05-04';
  const isLoading = false;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="contents">
        <div className="container">
          <Post
            title={title}
            postImageURL={postImageURL}
            body={body}
            createdTime={createdTime}
            isLoading={isLoading}
          />
          <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            TOPへ
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(PostContainer);
