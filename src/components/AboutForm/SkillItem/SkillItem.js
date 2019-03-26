import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { colors } from '../../../utilities/colors';
import editIcon from '../../../icons/edit.svg';

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
  margin: 0 10px;
  color: ${colors.grayGreen};
  text-transform: capitalize;

  &:read-only {
    background: ${colors.white07};
  }
`;
const StyledEditButton = styled.button`
  background-image: url(${editIcon});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;
const StyledPercentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledPercentInput = styled.input`
  width: 50px;
  border-radius: 3px;
  padding: 8px 12px;
  text-align: center;
  color: ${colors.grayGreen};
`;
const StyledPercentText = styled.div`
  margin-left: 10px;
  color: ${colors.green};
`;

const SkillItem = ({ skill, percent }) => {
  const [isSkillDisabled, setSkillDisabled] = useState(true);
  const handleEditButtonClick = e => {
    e.preventDefault();
    setSkillDisabled(false);
  };

  const numberNormalizer = value => {
    if (!value || !value.trim) return '';
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  };
  const numberFormatter = value => {
    if (!value) return 0;
    if (value % 5 > 0) {
      return Math.round(value / 5) * 5;
    } else {
      return value;
    }
  };

  return (
    <StyledSkillItem>
      <Field name={skill} initialValue={skill}>
        {({ input }) => (
          <StyledTextInput
            {...input}
            readOnly={isSkillDisabled}
            onBlur={e => setSkillDisabled(true)}
            type="text"
          />
        )}
      </Field>
      <StyledEditButton onClick={handleEditButtonClick} />
      <StyledPercentBlock>
        <Field
          name={`${skill}_percent`}
          initialValue={percent}
          parse={numberNormalizer}
          format={numberFormatter}
          formatOnBlur
        >
          {({ input }) => <StyledPercentInput {...input} type="text" />}
        </Field>

        <StyledPercentText>%</StyledPercentText>
      </StyledPercentBlock>
    </StyledSkillItem>
  );
};

export default SkillItem;
