import React, { Fragment, useState } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import { colors } from '../../utilities/colors';
import { media } from '../styledComponents/media';
import uploadIcon from '../../icons/upload_image.svg';
import {
  StyledButton,
  StyledInput,
  StyledErrorSpan,
  StyledSubtitle,
} from '../styledComponents/styledComponents';

import { StyledForm, StyledFieldset } from '../styledComponents/styledLayouts';
import { apiRequest } from '../../utilities/axiosConfig';

const StyledFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.phone`
    align-items: center;
  `}
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
`;
const StyledIcon = styled.div`
  background-image: url(${uploadIcon});
  background-size: cover;
  width: 35px;
  height: 35px;
`;
const StyledLabelBlock = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const StyledLabelText = styled.span`
  margin-left: 15px;
  color: ${colors.lightGreen};
`;

const StyledHiddenInput = styled.input`
  position: absolute;
  visibility: hidden;
`;
const StyledImgContainer = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  width: 180px;
  height: 180px;
  border: 1px dashed ${colors.gray};
  border-radius: 3px;
  transition: height 0.5s;

  ${media.phone`
    width: 150px;
    height: 150px;
  `}
`;

const WorksForm = props => {
  const { renderResponse, addWorkToState } = props;
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const initialValues = { title: '', stack: '', file: '', url: '' };

  const myHandleSubmit = values => {
    values.file = imageFile;

    const data = new FormData();
    data.set('url', values.url);
    data.set('stack', values.stack);
    data.set('title', values.title);
    data.set('img', values.file);

    apiRequest
      .post('/works', data)
      .then(response => {
        const { message, work } = response.data;
        renderResponse(message);
        console.log('WorksForm myHandleSubmit response', response);
        addWorkToState(work);
      })
      .catch(error => {
        renderResponse(`Произошла ошибка: ${error.message}`);
        console.log('WorksForm myHandleSubmit error', error);
      });

    setImagePreview(null);
    setImageFile(null);
  };
  const syncValidate = values => {
    const errors = {};
    Object.keys(initialValues).forEach(key =>
      values[key] ? null : (errors[key] = 'Обязательное поле')
    );
    return errors;
  };
  const readFile = onChange => e => {
    onChange(e);
    setImageFile(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = e => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <Form
      onSubmit={myHandleSubmit}
      validate={syncValidate}
      initialValues={initialValues}
      render={({
        handleSubmit,
        form,
        invalid,
        submitting,
        pristine,
        values,
      }) => (
        <Fragment>
          <StyledSubtitle>Добавить работу</StyledSubtitle>
          <StyledForm
            enctype="multipart/form-data"
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
                      placeholder="Название проекта"
                      type="text"
                    />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>
              <Field name="stack">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput
                      {...input}
                      placeholder="Технологии"
                      type="text"
                    />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>
              <Field name="url">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput
                      {...input}
                      placeholder="Ссылка на работу"
                      type="text"
                    />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <Field name="file">
                {({ input: { onChange, ...input }, meta }) => (
                  <StyledFieldset>
                    <StyledLabelBlock>
                      <StyledIcon />
                      <StyledLabelText>Загрузить картинку</StyledLabelText>
                      <StyledHiddenInput
                        onChange={readFile(onChange)}
                        {...input}
                        type="file"
                      />
                    </StyledLabelBlock>
                    {meta.error && meta.invalid && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <StyledImgContainer img={imagePreview} />
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

export default WorksForm;
