import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import { colors } from '../../utilities/colors';
import { numberFormatterFive } from '../../utilities/helpers';

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

const PercentBlock = ({ id, percent, type }) => {
  const numberNormalizer = value => {
    if (+value > 100) return '100';
    if (!value || !value.trim) return '';
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  };
  const handleEnterFormatter = e => {
    if (e.key === 'Enter') {
      e.target.value = numberFormatterFive(e.target.value);
    }
  };

  return (
    <StyledPercentBlock>
      <Field
        name={id ? `${type}.${id}_percent` : 'percent'}
        initialValue={percent}
        parse={numberNormalizer}
        format={numberFormatterFive}
        formatOnBlur
      >
        {({ input }) => (
          <StyledPercentInput
            {...input}
            type="text"
            onKeyDown={handleEnterFormatter}
          />
        )}
      </Field>

      <StyledPercentText>%</StyledPercentText>
    </StyledPercentBlock>
  );
};

PercentBlock.propTypes = {
  id: PropTypes.string,
  percent: PropTypes.number,
  type: PropTypes.string
};

export default PercentBlock;
