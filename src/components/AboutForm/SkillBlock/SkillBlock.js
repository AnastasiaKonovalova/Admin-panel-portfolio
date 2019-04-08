import React from 'react';
import styled from 'styled-components';

import { StyledSubtitle } from '../../styledComponents/styledComponents';
import SkillItem from '../SkillItem';

const StyledSkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const StyledSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SkillBlock = ({ type, skills, deleteSkill }) => {
  const handleClicks = (type, id) => e => {
    e.preventDefault();
    const classList = e.target.classList;
    if (classList.contains('delete_skill')) {
      deleteSkill(type, id);
    }
    if (classList.contains('edit_skill')) {
      console.log('edit_skill');
    }
  };

  return (
    <StyledSkillsBlock>
      <StyledSubtitle>{type}</StyledSubtitle>
      <StyledSkillsList>
        {skills.map(skill => (
          <SkillItem
            key={skill._id}
            skill={skill}
            handleClicks={handleClicks(type, skill._id)}
          />
        ))}
      </StyledSkillsList>
    </StyledSkillsBlock>
  );
};

export default SkillBlock;
