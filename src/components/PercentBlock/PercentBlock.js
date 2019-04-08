import React from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { colors } from '../../utilities/colors';

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

const PercentBlock = ({ id, percent }) => {
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
    <StyledPercentBlock>
      <Field
        name={`${id}_percent`}
        initialValue={percent}
        parse={numberNormalizer}
        format={numberFormatter}
        formatOnBlur
      >
        {({ input }) => <StyledPercentInput {...input} type="text" />}
      </Field>

      <StyledPercentText>%</StyledPercentText>
    </StyledPercentBlock>
  );
};

export default PercentBlock;
