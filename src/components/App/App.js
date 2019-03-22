import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  NavLink,
} from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutPage from '../AboutPage';
import BlogPage from '../BlogPage';
import WorksPage from '../WorksPage';

import { colors } from '../../utilities/colors';

const App = props => {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/edit-about" component={AboutPage} />
          <Redirect from="/" exact to="/edit-about" />
          <Route path="/edit-works" component={WorksPage} />
          <Route path="/edit-blog" component={BlogPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
