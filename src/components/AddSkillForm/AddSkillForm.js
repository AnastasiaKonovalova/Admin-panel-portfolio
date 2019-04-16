/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

import {
  StyledButton,
  StyledErrorSpan,
} from '../styledComponents/styledComponents';
import { StyledFieldset } from '../styledComponents/styledLayouts';
import PercentBlock from '../PercentBlock';

import { media } from '../styledComponents/media';
import { colors } from '../../utilities/colors';
import { apiRequest } from '../../utilities/axiosConfig';
import { numberFormatterFive } from '../../utilities/helpers';

const StyledSubtitle = styled.h3`
  color: ${colors.grayGreen};
  margin-bottom: 20px;
  font-weight: 500;
`;

const StyledFormWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledForm = styled.form`
  background-color: ${colors.ligthGray};
  box-shadow: 0 0 10px 5px ${colors.transparentBlack};
  padding: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  ${media.tablet`
    flex-direction: column;
  `}
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 3px;
  width: 150px;
  color: ${colors.grayMedium};

  ${media.tablet`
    margin-right: 0;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const AddSkillForm = ({
  closeAddSkillForm,
  renderResponse,
  addSkillToState,
}) => {
  const initialValues = { type: '', skill: '', percent: '0' };

  const myHandleSubmit = values => {
    apiRequest
      .post('/skills', {
        type: values.type.toLowerCase().trim(),
        percent: numberFormatterFive(values.percent),
        skill: values.skill.trim(),
      })
      .then(response => {
        const { message, skill } = response.data;
        addSkillToState(skill);
        renderResponse(message);
      })
      .catch(error => {
        console.log('AddSkillForm submit error', error);
        renderResponse(`Произошла ошибка: ${error.message}`);
      })
      .finally(() => {
        closeAddSkillForm();
      });
  };
  const syncValidate = values => {
    const errors = {};
    const requiredError = 'Обязательное поле';

    Object.keys(initialValues).forEach(key => {
      const value = values[key];
      if (typeof value === 'string') {
        value.trim() ? null : (errors[key] = requiredError);
      }
      value ? null : (errors[key] = requiredError);
    });
    return errors;
  };
  const handleReset = form => e => {
    form.reset();
    closeAddSkillForm();
  };

  return (
    <StyledFormWrapper>
      <Form
        onSubmit={myHandleSubmit}
        validate={syncValidate}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, invalid }) => (
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <StyledSubtitle>Добавить новый навык</StyledSubtitle>
            <StyledFieldsContainer>
              <Field name="type">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput
                      {...input}
                      placeholder="Тип навыка"
                      type="text"
                    />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <Field name="skill">
                {({ input, meta }) => (
                  <StyledFieldset>
                    <StyledInput {...input} placeholder="Навык" type="text" />
                    {meta.error && meta.touched && (
                      <StyledErrorSpan>{meta.error}</StyledErrorSpan>
                    )}
                  </StyledFieldset>
                )}
              </Field>

              <StyledFieldset>
                <PercentBlock />
              </StyledFieldset>
            </StyledFieldsContainer>
            <StyledButtonContainer>
              <StyledButton type="reset" onClick={handleReset(form)}>
                Отмена
              </StyledButton>
              <StyledButton
                type="submit"
                disabled={submitting || pristine || invalid}
              >
                Добавить
              </StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        )}
      />
    </StyledFormWrapper>
  );
};

AddSkillForm.propTypes = {
  closeAddSkillForm: PropTypes.func,
  renderResponse: PropTypes.func,
  addSkillToState: PropTypes.func,
};

export default AddSkillForm;
