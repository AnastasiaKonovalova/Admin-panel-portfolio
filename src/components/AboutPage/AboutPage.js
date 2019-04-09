import React, { Fragment, useState, useEffect } from 'react';

import { StyledMaincontent } from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';
import { apiRequest } from '../../utilities/axiosConfig';

import AboutForm from '../AboutForm';
import ResponseAlert from '../ResponseAlert';
import AddSkillForm from '../AddSkillForm';

const AboutPage = props => {
  const [responseMessage, setResponseMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [stacks, setStack] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest
      .get('/skills', { mode: 'cors' })
      .then(response => {
        const { skills } = response.data;
        setStack(skills);
      })
      .catch(error => {
        console.log('AboutPage load error', error);
        setError(error);
      });
  }, []);

  const updateStack = skills => {
    setStack(skills);
  };

  const addSkillToState = newStack => {
    const oldStack = stacks.find(stack => stack.type === newStack.type);
    if (!oldStack) {
      setStack([...stacks, newStack]);
    } else {
      oldStack.skills = newStack.skills;
    }
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

  const removeSkillFromState = (type, id) => {
    const editedStack = stacks.find(skill => skill.type === type);
    const newSkills = editedStack.skills.filter(skill => skill._id !== id);
    if (newSkills.length > 0) {
      // const newStack = Object.assign({}, editedStack);
      // newStack.skills = newSkills;
      // setStack([
      //   ...stacks.filter(stack => stack._id !== editedStack._id),
      //   newStack,
      // ]);
      editedStack.skills = newSkills;
      setStack([...stacks]);
    } else {
      setStack(stacks.filter(stack => stack._id !== editedStack._id));
    }
  };
  const deleteSkill = (type, id) => {
    apiRequest
      .put(`/skills/${id}`, { type: type }, { mode: 'cors' })
      .then(response => {
        console.log('deleteSkill response', response);
        removeSkillFromState(type, id);
      })
      .catch(error => {
        console.log('deleteSkill put error', error);
        showResponseMessage(`Произошла ошибка: ${error.message}`);
      });
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
            deleteSkill={deleteSkill}
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
