import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { colors } from '../../../utilities/colors';
import { media } from '../../styledComponents/media';
import {
  StyledEditButton,
  StyledCloseButton,
} from '../../styledComponents/styledComponents';

import PercentBlock from '../../PercentBlock';

const StyledSkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StyledTextInput = styled.input`
  background: ${colors.white};
  border: none;
  border-radius: 3px;
  padding: 8px 8px;
  width: 180px;
  margin: 0 10px;
  color: ${colors.grayGreen};
  text-transform: capitalize;

  &:read-only {
    background: ${colors.white07};
  }

  ${media.phone`
    width: 120px;
  `}
`;

const SkillItem = ({ skill, handleClicks, type }) => {
  const [isSkillDisabled, setSkillDisabled] = useState(true);

  const handleEditButtonClick = e => {
    handleClicks(e);
    setSkillDisabled(false);
  };

  return (
    <StyledSkillItem>
      <Field name={`${type}.${skill._id}`} initialValue={skill.skill}>
        {({ input }) => (
          <StyledTextInput
            {...input}
            readOnly={isSkillDisabled}
            onBlur={e => setSkillDisabled(true)}
            type="text"
          />
        )}
      </Field>
      <StyledEditButton
        onClick={handleEditButtonClick}
        className="edit_skill"
      />
      <StyledCloseButton className="delete_skill" onClick={handleClicks} />
      <PercentBlock id={skill._id} percent={skill.percent} type={type} />
    </StyledSkillItem>
  );
};

export default SkillItem;
