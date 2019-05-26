import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header>
    <div className="container">
      <Link to="/">タイ旅行記</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">トップ</Link>
          </li>
          <li>
            <Link to="/siteInformation">サイト情報</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
