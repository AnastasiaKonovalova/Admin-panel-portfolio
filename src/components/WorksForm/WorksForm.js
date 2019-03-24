import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import { colors } from '../../utilities/colors';
import uploadImage from '../../icons/upload_image.svg';
import {
  StyledButton,
  StyledInput,
  StyledTextarea,
  StyledErrorSpan,
  StyledSubtitle,
} from '../styledComponents/styledComponents';

import { StyledForm, StyledFieldset } from '../styledComponents/styledLayouts';

const StyledFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
`;
const StyledIcon = styled.div`
  background-image: url(${uploadImage});
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

const WorksForm = props => {
  const initialValues = { name: '', stack: '', file: '' };

  const myHandleSubmit = values => {
    console.log('myHandleSubmit', values);
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
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
              form.reset();
            }}
          >
            <StyledFieldsContainer>
              <Field name="name">
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
              <Field name="file">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledLabelBlock>
                      <StyledIcon />
                      <StyledLabelText>Загрузить картинку</StyledLabelText>
                      <StyledHiddenInput {...input} type="file" />
                    </StyledLabelBlock>
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

export default WorksForm;
