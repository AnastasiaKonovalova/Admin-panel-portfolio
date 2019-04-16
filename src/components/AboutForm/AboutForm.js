import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

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
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  `}
`;
const PositionedStyledButton = styled(StyledButton)`
  margin-right: 30px;
  margin-bottom: 15px;
`;

const AboutForm = ({
  skills,
  showAddSkillForm,
  renderResponse,
  updateStack,
}) => {
  const myHandleSubmit = values => {
    const request = {};

    Object.keys(values).forEach(key => {
      const stack = values[key];
      const skills = Object.keys(stack).reduce((acc, input, inputIndex) => {
        if (!stack[input]) {
          return { ...acc };
        }
        return { ...acc, [input]: stack[input] };
      }, {});

      request[key] = skills;
    });

    apiRequest
      .put('/skills', request)
      .then(response => {
        const { message, items } = response.data;
        renderResponse(message);
        updateStack(items);
      })
      .catch(error => {
        console.log('AboutForm submit error', error);
        renderResponse(`Произошла ошибка: ${error.message}`);
      });
  };

  const deleteSkillMutator = ([type, id], state, utils) => {
    const name = `${type}.${id}`;
    const percentName = `${type}.${id}_percent`;
    utils.changeValue(state, name, () => '');
    utils.changeValue(state, percentName, () => '');
  };

  const getInitialValues = () => {
    const initialValues = {};
    skills.forEach(stack => {
      initialValues[stack.type] = {};

      stack.skills.forEach(skill => {
        const percent = `${skill._id}_percent`;
        initialValues[stack.type][skill._id] = skill.skill;
        initialValues[stack.type][percent] = skill.percent;
      });
    });
    return initialValues;
  };

  return (
    <Form
      onSubmit={myHandleSubmit}
      mutators={{ deleteSkillMutator }}
      initialValues={getInitialValues()}
      render={({ handleSubmit, form, submitting, pristine }) => {
        return (
          <Fragment>
            <StyledForm
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <StyledFieldsContainer>
                {skills.map(skill => {
                  return (
                    <SkillBlock
                      mutators={form.mutators}
                      key={skill._id}
                      type={skill.type}
                      skills={skill.skills}
                    />
                  );
                })}
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
        );
      }}
    />
  );
};

AboutForm.propTypes = {
  skills: PropTypes.array,
  showAddSkillForm: PropTypes.func,
  renderResponse: PropTypes.func,
  updateStack: PropTypes.func,
};

export default AboutForm;
