import React, { useState } from 'react';
import styled from 'styled-components';
import { FieldArray } from 'react-final-form-arrays';

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

const SkillBlock = ({ type, skills, mutators }) => {
  return (
    <StyledSkillsBlock>
      <StyledSubtitle>{type}</StyledSubtitle>
      <StyledSkillsList>
        {skills.map(skill => (
          <SkillItem
            mutators={mutators}
            key={skill._id}
            skill={skill}
            type={type}
          />
        ))}
      </StyledSkillsList>
    </StyledSkillsBlock>
  );
};

export default SkillBlock;
