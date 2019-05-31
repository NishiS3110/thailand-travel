import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../services/models';

export interface ArticleCardProps {
  post: Post;
}

const defaultPost = {
  id: '',
  title: '',
  imageURL: '',
  body: '',
  createdTime: '',
  updatedTime: '',
};

const ArticleCard: FC<ArticleCardProps> = ({ post = defaultPost }) => {
  return (
    <article>
      <Link to={`/posts/${post.id}`}>
        <figure>
          <img src={post.imageURL} alt={`${post.title}の画像`} />
        </figure>
        <h3>{post.title}</h3>
      </Link>
    </article>
  );
};

export default ArticleCard;
