import React, { Fragment, useState, useEffect } from 'react';

import { StyledMaincontent } from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';
import { apiRequest } from '../../utilities/axiosConfig';

import AboutForm from '../AboutForm';
import ResponseAlert from '../ResponseAlert';
import AddSkillForm from '../AddSkillForm';

const AboutPage = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [stacks, setStack] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest
      .get('/skills')
      .then(response => {
        const { skills } = response.data;
        skills.sort((a, b) => {
          if (a.type > b.type) return 1;
          if (a.type < b.type) return -1;
        });
        setStack(skills);
      })
      .catch(error => {
        console.log('AboutPage load error', error);
        setError(error);
      });
  }, []);

  const updateStack = skills => {
    console.log('UPDATE STATE', skills);
    setStack(prevstate => skills);
  };

  const addSkillToState = newStack => {
    const newState = [
      ...stacks.filter(stack => stack.type !== newStack.type),
      newStack
    ];
    newState.sort((a, b) => {
      if (a.type > b.type) return 1;
      if (a.type < b.type) return -1;
    });
    setStack(newState);
  };
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
          <AddSkillForm
            closeAddSkillForm={closeAddSkillForm}
            renderResponse={showResponseMessage}
            addSkillToState={addSkillToState}
          />
        ) : null}
        {error ? (
          <div>Произошла ошибка загрузки: {error}</div>
        ) : (
          <AboutForm
            skills={stacks}
            showAddSkillForm={showAddSkillForm}
            renderResponse={showResponseMessage}
            updateStack={updateStack}
          />
        )}
      </StyledMaincontent>
    </Fragment>
  );
};

export default AboutPage;
