import React, { FC } from 'react';
import Helmet from 'react-helmet';

import HeroImage from '../components/HeroImage';
import TopPost from '../components/TopPost';

const TopContainer: FC = () => {
  const posts = [
    {
      id: '0001',
      title: 'test1',
      imageURL: '',
      body:
        '<p>タイ旅行の写真です。</p><p>このスポット寺院です。</p><p>寺院ではありますが、金色の外装なので明るく豪華な印象を受けます。各国からの観光客が多く、祈りを落ち着いて捧げることは難しそうでした。</p>',
      createdTime: '2019-05-04',
      updatedTime: '2019-05-04',
    },
    {
      id: '0002',
      title: 'test2',
      imageURL: '',
      body:
        '<p>タイ旅行の写真です。</p><p>このスポット寺院です。</p><p>寺院ではありますが、金色の外装なので明るく豪華な印象を受けます。各国からの観光客が多く、祈りを落ち着いて捧げることは難しそうでした。</p>',
      createdTime: '2019-05-04',
      updatedTime: '2019-05-04',
    },
    {
      id: '0003',
      title: 'test3',
      imageURL: '',
      body:
        '<p>タイ旅行の写真です。</p><p>このスポット寺院です。</p><p>寺院ではありますが、金色の外装なので明るく豪華な印象を受けます。各国からの観光客が多く、祈りを落ち着いて捧げることは難しそうでした。</p>',
      createdTime: '2019-05-04',
      updatedTime: '2019-05-04',
    },
    {
      id: '0004',
      title: 'test4',
      imageURL: '',
      body:
        '<p>タイ旅行の写真です。</p><p>このスポット寺院です。</p><p>寺院ではありますが、金色の外装なので明るく豪華な印象を受けます。各国からの観光客が多く、祈りを落ち着いて捧げることは難しそうでした。</p>',
      createdTime: '2019-05-04',
      updatedTime: '2019-05-04',
    },
  ];
  const isLoading = false;

  return (
    <>
      <Helmet>
        <title>タイ旅行記 ~ただひたすらに寺院を巡って~</title>
      </Helmet>
      <HeroImage />
      <TopPost posts={posts} isLoading={isLoading} />
    </>
  );
};

export default TopContainer;
