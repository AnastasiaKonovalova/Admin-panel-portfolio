import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import axios from 'axios';

import { media } from '../styledComponents/media';

import {
  StyledButton,
  StyledInput,
  StyledTextarea,
  StyledErrorSpan,
  StyledSubtitle,
} from '../styledComponents/styledComponents';

import { StyledForm, StyledFieldset } from '../styledComponents/styledLayouts';

const myHttp = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const StyledFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
`;

const BlogForm = props => {
  const initialValues = { title: '', date: '', text: '' };

  const myHandleSubmit = values => {
    console.log('myHandleSubmit', values);
    myHttp
      .post('/blog', {
        title: values.title,
        date: values.date,
        text: values.text,
        mode: 'cors',
      })
      .then(function(response) {
        console.log('BlogForm submit response', response);
      })
      .catch(function(error) {
        console.log('BlogForm submit error', error);
      });
  };

  const syncValidate = values => {
    const errors = {};

    Object.keys(initialValues).forEach(key =>
      values[key] ? null : (errors[key] = 'Обязательное поле')
    );
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

export default BlogForm;
