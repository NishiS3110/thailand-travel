import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Post from './containers/Post';
import Top from './containers/Top';
import Footer from './components/Footer';

const App: FC = () => (
  <>
    <Switch>
      <Route path="/posts/:id" component={Post} />
      <Route path="/" component={Top} />
      <Redirect to="/" />;
    </Switch>
    <Footer />
  </>
);

export default App;
