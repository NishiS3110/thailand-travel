import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../services/models';

export interface HeroImageProps {
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

const HeroImage: FC<HeroImageProps> = ({ post = defaultPost }) => {
  return (
    <section className="hero">
      <h1>タイ旅行記</h1>
      <p>~ただひたすらに寺院を巡って~</p>
      <Link to={`/posts/${post.id}`}>No.1 オススメスポット</Link>
    </section>
  );
};

export default HeroImage;
