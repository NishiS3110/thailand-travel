import React, { FC } from 'react';

const Profile: FC = () => (
  <aside className="profile">
    <h2>PROFILE</h2>
    <figure>
      <img src="/authorImage.jpg" alt="タイ旅行記の管理人" />
    </figure>
    <p>
      コーヒー豆を挽くのが趣味。
      <br />
      時々、海外にふらっと一人旅に行きます。
    </p>
  </aside>
);

export default Profile;
