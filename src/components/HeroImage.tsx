import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const HeroImage: FC = () => (
  <section className="hero">
    <h1>タイ旅行記</h1>
    <p>~ただひたすらに寺院を巡って~</p>
    <Link to="/posts/0001">No.1 オススメ寺院</Link>
  </section>
);

export default HeroImage;
