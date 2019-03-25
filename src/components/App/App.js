import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutPage from '../AboutPage';
import BlogPage from '../BlogPage';
import WorksPage from '../WorksPage';

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
            <Route path="/edit-about" component={AboutPage} />
            <Redirect from="/" exact to="/edit-about" />
            <Route path="/edit-works" component={WorksPage} />
            <Route path="/edit-blog" component={BlogPage} />
          </Switch>
        </StyledContainer>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
