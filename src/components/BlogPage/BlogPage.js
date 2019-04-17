import React, { Fragment, useState, useEffect } from 'react';

import { apiRequest } from '../../utilities/axiosConfig';

import {
  StyledMaincontent,
  StyledColumn
} from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';

import BlogForm from '../BlogForm';
import ResponseAlert from '../ResponseAlert';
import BlogList from '../BlogList';

const BlogPage = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest
      .get('/blog')
      .then(response => {
        const { articles } = response.data;
        // console.log('BlogPage useEffect response.data', response.data);
        setArticles(articles);
      })
      .catch(error => {
        console.log('BlogPage useEffect error', error);
        setError(error);
      });
  }, []);

  const showResponseMessage = message => {
    setResponseMessage(message);
  };
  const closeResponseMessage = () => {
    setResponseMessage('');
  };
  const addArticleToState = article => {
    setArticles([...articles, article]);
  };
  const deleteArticle = id => () => {
    apiRequest.delete(`/blog/${id}`).then(response => {
      console.log('deleteArticle response', response);
      if (response.status !== 201) {
        showResponseMessage(response.data.message);
        return;
      }
      setArticles(articles.filter(article => article._id !== id));
      showResponseMessage(response.data.message);
    });
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
          <BlogForm
            renderResponse={showResponseMessage}
            addArticleToState={addArticleToState}
          />
        </StyledColumn>
        <StyledColumn>
          {error ? (
            <div>Произошла ошибка загрузки: {error}</div>
          ) : (
            <BlogList articles={articles} deleteArticle={deleteArticle} />
          )}
        </StyledColumn>
      </StyledMaincontent>
    </Fragment>
  );
};

export default BlogPage;
