import React, { FC } from 'react';

import { Post } from '../services/models';

export interface TopPostProps {
  posts: Post[];
  isLoading?: boolean;
}

const TopPost: FC<TopPostProps> = ({ posts = [], isLoading = false }) => {
  return (
    <>
      {isLoading ? (
        <div>読み込み中</div>
      ) : (
        <section className="toppost">
          <h2>SPOT</h2>
          <div className="container">
            {posts.map(post => (
              <article key={post.id}>
                <a href={post.imageURL}>
                  <figure>
                    <img src={post.imageURL} alt={`${post.title}の画像`} />
                  </figure>
                  <h3>{post.title}</h3>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TopPost;
