import React, { Fragment } from 'react';

import {
  StyledMaincontent,
  StyledColumn,
} from '../styledComponents/styledLayouts';

import { StyledTitle } from '../styledComponents/styledComponents';

import BlogForm from '../BlogForm';

const BlogPage = props => {
  return (
    <Fragment>
      <StyledTitle>Страница «Блог»</StyledTitle>
      <StyledMaincontent>
        <StyledColumn>
          <BlogForm />
        </StyledColumn>
        <StyledColumn>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </StyledColumn>
      </StyledMaincontent>
    </Fragment>
  );
};

export default BlogPage;
