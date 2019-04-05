import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyledMaincontent } from '../styledComponents/styledLayouts';
import {
  StyledTitle,
  StyledButton,
} from '../styledComponents/styledComponents';
import { media } from '../styledComponents/media';

import AboutForm from '../AboutForm';
import ResponseAlert from '../ResponseAlert';
import AddSkillForm from '../AddSkillForm';

import skills from './skills.json';

const PositionedStyledButton = styled(StyledButton)`
  position: absolute;
  top: 100%;
  left: 30px;
  transform: translate(100%, -200%);

  ${media.tablet`
    transform: translate(0, 50%);
  `}
`;

const AboutPage = props => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const showAddSkillForm = e => {
    e.preventDefault();
    setIsAdding(true);
  };
  const closeAddSkillForm = () => {
    setIsAdding(false);
  };

  const showResponseMessage = message => {
    setResponseMessage(message);
  };
  const closeResponseMessage = () => {
    setResponseMessage('');
  };

  const deleteSkill = e => {
    e.preventDefault();
    console.log('deleteSkill ');
  };

  return (
    <Fragment>
      <StyledTitle>Страница «Обо мне»</StyledTitle>
      <StyledMaincontent>
        {responseMessage ? (
          <ResponseAlert
            message={responseMessage}
            onClick={closeResponseMessage}
          />
        ) : null}
        {isAdding ? (
          <AddSkillForm closeAddSkillForm={closeAddSkillForm} />
        ) : null}
        <AboutForm
          skills={skills}
          deleteSkill={deleteSkill}
          showAddSkillForm={showAddSkillForm}
        />
        {
          //   <PositionedStyledButton onClick={showAddSkillForm}>
          //   Добавить новую запись
          // </PositionedStyledButton>
        }
      </StyledMaincontent>
    </Fragment>
  );
};

export default AboutPage;
