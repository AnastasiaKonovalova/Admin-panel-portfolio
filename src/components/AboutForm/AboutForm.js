import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';

import { StyledButton } from '../styledComponents/styledComponents';

import { StyledForm } from '../styledComponents/styledLayouts';

import SkillBlock from './SkillBlock';

const StyledFieldsContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 400px;
  width: 100%;
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;

const AboutForm = ({ skills }) => {
  const myHandleSubmit = values => {
    console.log('myHandleSubmit', values);
  };

  return (
    <Form
      onSubmit={myHandleSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <Fragment>
          <StyledForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <StyledFieldsContainer>
              {skills.map(skill => (
                <SkillBlock
                  key={skill.type}
                  type={skill.type}
                  skills={skill.skills}
                />
              ))}
            </StyledFieldsContainer>

            <StyledButtonContainer>
              <StyledButton type="submit" disabled={submitting || pristine}>
                Сохранить
              </StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </Fragment>
      )}
    />
  );
};

export default AboutForm;
