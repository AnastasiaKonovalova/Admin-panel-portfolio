import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

import {
  StyledButton,
  StyledInput,
  StyledTextarea,
  StyledErrorSpan,
  StyledSubtitle
} from '../styledComponents/styledComponents';
import { StyledForm, StyledFieldset } from '../styledComponents/styledLayouts';
import { apiRequest } from '../../utilities/axiosConfig';

const StyledFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
`;

const BlogForm = ({ renderResponse, addArticleToState }) => {
  const initialValues = { title: '', date: '', text: '' };

  const myHandleSubmit = values => {
    apiRequest
      .post('/blog', {
        title: values.title.trim(),
        date: values.date,
        text: values.text.trim()
      })
      .then(response => {
        const { message, article } = response.data;
        renderResponse(message);
        addArticleToState(article);
      })
      .catch(error => {
        console.log('BlogForm submit error', error);
        renderResponse(`Произошла ошибка: ${error.message}`);
      });
  };

  const syncValidate = values => {
    const errors = {};

    Object.keys(initialValues).forEach(key => {
      if (typeof values[key] === 'string') {
        return values[key].trim() ? null : (errors[key] = 'Обязательное поле');
      } else {
        return values[key] ? null : (errors[key] = 'Обязательное поле');
      }
    });
    return errors;
  };

  return (
    <Form
      onSubmit={myHandleSubmit}
      validate={syncValidate}
      initialValues={initialValues}
      render={({ handleSubmit, form, submitting, invalid, pristine }) => (
        <Fragment>
          <StyledSubtitle>Добавить запись</StyledSubtitle>
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
              form.reset();
            }}
          >
            <StyledFieldsContainer>
              <Field name="title">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput
                      {...input}
                      placeholder="Название"
                      type="text"
                    />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <Field name="date">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput {...input} placeholder="Дата" type="date" />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <Field name="text">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledTextarea {...input} placeholder="Содержание" />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>
            </StyledFieldsContainer>

            <StyledButtonContainer>
              <StyledButton
                type="submit"
                disabled={submitting || pristine || invalid}
              >
                Добавить
              </StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </Fragment>
      )}
    />
  );
};

BlogForm.propTypes = {
  renderResponse: PropTypes.func,
  addArticleToState: PropTypes.func
};

export default BlogForm;
