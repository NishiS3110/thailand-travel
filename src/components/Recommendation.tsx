import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RecommendationModel } from '../services/models';

export interface RecommendationProps {
  recommendationList: RecommendationModel[];
  isLoading?: boolean;
}

const Recommendation: FC<RecommendationProps> = ({
  recommendationList = [],
  isLoading = false,
}) => {
  return (
    <>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <aside className="recommendation">
          <h2>オススメ</h2>
          <ul>
            {recommendationList.map(recommendation => (
              <li key={recommendation.id}>
                <Link to={`/posts/${recommendation.id}`}>
                  <figure>
                    <img
                      src={recommendation.imageURL}
                      alt={`${recommendation.title}の画像`}
                    />
                  </figure>
                  <h3>{recommendation.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Recommendation;
