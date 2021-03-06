import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutPage from '../AboutPage';
import BlogPage from '../BlogPage';
import WorksPage from '../WorksPage';
import NotFoundPage from '../NotFoundPage';

import bgImage from '../../img/admin_bg.jpg';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = props => {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Navigation />
        <StyledContainer>
          <Switch>
            <Route path="/admin/edit-about" component={AboutPage} />
            <Redirect from="/admin" exact to="/admin/edit-about" />
            <Route path="/admin/edit-works" component={WorksPage} />
            <Route path="/admin/edit-blog" component={BlogPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledContainer>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
