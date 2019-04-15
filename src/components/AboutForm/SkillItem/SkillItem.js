import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { colors } from '../../../utilities/colors';
import { media } from '../../styledComponents/media';
import {
  StyledEditButton,
  StyledCloseButton
} from '../../styledComponents/styledComponents';

import PercentBlock from '../../PercentBlock';

const StyledSkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  position: relative;
`;

const DeletedSkillItem = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colors.grayGreen};
  position: absolute;
  left: 0;
  top: 50%;
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

const SkillItem = ({ skill, type, mutators }) => {
  const [isSkillDisabled, setSkillDisabled] = useState(true);
  const [isSkillDeleted, setSkillDeleted] = useState(false);

  const handleDelete = (type, id) => e => {
    e.preventDefault();
    mutators.deleteSkillMutator(type, id);
    setSkillDeleted(true);
  };

  const handleEdit = e => {
    e.preventDefault();
    setSkillDisabled(false);
  };
  return (
    <StyledSkillItem>
      {isSkillDeleted ? <DeletedSkillItem /> : null}
      <Field name={`${type}.${skill._id}`}>
        {({ input }) => (
          <StyledTextInput
            {...input}
            readOnly={isSkillDisabled}
            onBlur={e => setSkillDisabled(true)}
            type="text"
          />
        )}
      </Field>
      <StyledEditButton onClick={handleEdit} className="edit_skill" />
      <StyledCloseButton
        className="delete_skill"
        onClick={handleDelete(type, skill._id)}
      />
      <PercentBlock id={skill._id} percent={skill.percent} type={type} />
    </StyledSkillItem>
  );
};

export default SkillItem;
