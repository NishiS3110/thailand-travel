import React, { FC } from 'react';

import Profile from './Profile';
import Recommendation from './Recommendation';

import { RecommendationModel } from '../services/models';

export interface RecommendationProps {
  recommendationList: RecommendationModel[];
  isLoading?: boolean;
}

const SubMenu: FC<RecommendationProps> = ({
  recommendationList = [],
  isLoading = false,
}) => {
  return (
    <div className="sub">
      <Profile />
      <Recommendation
        recommendationList={recommendationList}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SubMenu;
