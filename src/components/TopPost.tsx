import React, { FC } from 'react';

import ArticleCard from './ArticleCard';

import { Post } from '../services/models';

export interface TopPostProps {
  posts: Post[];
  isLoading?: boolean;
}

const TopPost: FC<TopPostProps> = ({ posts = [], isLoading = false }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <section className="toppost">
          <h2>SPOT</h2>
          <div className="container">
            {posts.map(post => (
              <ArticleCard post={post} key={post.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TopPost;
