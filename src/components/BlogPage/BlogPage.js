import React, { Fragment, useState } from 'react';

import { apiRequest } from '../../utilities/axiosConfig';

import {
  StyledMaincontent,
  StyledColumn,
} from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';

import BlogForm from '../BlogForm';
import ResponseAlert from '../ResponseAlert';
import BlogList from '../BlogList';

const BlogPage = props => {
  const [responseMessage, setResponseMessage] = useState('');

  const getResponseMessage = message => {
    setResponseMessage(message);
  };
  const closeResponseMessage = () => {
    setResponseMessage('');
  };

  return (
    <Fragment>
      <StyledTitle>Страница «Блог»</StyledTitle>
      <StyledMaincontent>
        {responseMessage ? (
          <ResponseAlert
            message={responseMessage}
            onClick={closeResponseMessage}
          />
        ) : null}
        <StyledColumn>
          <BlogForm renderResponse={getResponseMessage} />
        </StyledColumn>
        <StyledColumn>
          <BlogList />
        </StyledColumn>
      </StyledMaincontent>
    </Fragment>
  );
};

export default BlogPage;
