import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Post from './containers/Post';
import Top from './containers/Top';
import SiteInformation from './containers/SiteInformation';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/siteInformation" component={SiteInformation} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/" component={Top} />
      <Redirect to="/" />;
    </Switch>
    <Footer />
  </>
);

export default App;
