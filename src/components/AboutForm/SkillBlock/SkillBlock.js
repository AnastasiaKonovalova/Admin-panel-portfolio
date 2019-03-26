import React, { Fragment } from 'react';
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

const SkillBlock = ({ type, skills }) => {
  return (
    <StyledSkillsBlock>
      <StyledSubtitle>{type}</StyledSubtitle>
      <StyledSkillsList>
        {skills.map(skill => (
          <SkillItem
            key={skill.skill}
            skill={skill.skill}
            percent={skill.percent}
          />
        ))}
      </StyledSkillsList>
    </StyledSkillsBlock>
  );
};

export default SkillBlock;
