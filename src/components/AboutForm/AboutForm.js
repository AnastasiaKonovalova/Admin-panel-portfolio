import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';

import { StyledButton } from '../styledComponents/styledComponents';
import { StyledForm } from '../styledComponents/styledLayouts';
import { media } from '../styledComponents/media';
import { apiRequest } from '../../utilities/axiosConfig';

import SkillBlock from './SkillBlock';

const StyledFieldsContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 400px;
  width: 100%;

  ${media.tablet`
    height: 600px;
  `}

  ${media.phone`
    padding: 0 10px;
  `}
`;
const StyledButtonContainer = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  display: flex;
  align-items: center;

  ${media.phone`
    margin-left: 10px;
  `}
`;
const PositionedStyledButton = styled(StyledButton)`
  margin-right: 30px;
`;

const AboutForm = ({
  skills,
  deleteSkill,
  showAddSkillForm,
  renderResponse,
  updateStack,
}) => {
  const myHandleSubmit = values => {
    console.log('myHandleSubmit', values);
    const request = {};
    Object.keys(values).forEach(key => {
      request[key] = values[key];
    });

    console.log('myHandleSubmit request', request);
    apiRequest
      .put('/skills', request)
      .then(response => {
        console.log('editSkills response', response);
        const { message, items } = response.data;
        renderResponse(message);
        updateStack(items);
      })
      .catch(error => {
        console.log('AboutForm submit error', error);
        renderResponse(`Произошла ошибка: ${error.message}`);
      });
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
                  key={skill._id}
                  type={skill.type}
                  skills={skill.skills}
                  deleteSkill={deleteSkill}
                />
              ))}
            </StyledFieldsContainer>

            <StyledButtonContainer>
              <PositionedStyledButton
                type="submit"
                disabled={submitting || pristine}
              >
                Сохранить
              </PositionedStyledButton>
              <PositionedStyledButton onClick={showAddSkillForm}>
                Добавить новую запись
              </PositionedStyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </Fragment>
      )}
    />
  );
};

export default AboutForm;
