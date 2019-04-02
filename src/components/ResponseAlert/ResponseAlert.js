import React, { Fragment } from 'react';
import styled from 'styled-components';

import { colors } from '../../utilities/colors';
import { StyledButton } from '../styledComponents/styledComponents';

const StyledWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 3px;
  box-shadow: 0 0 10px 5px ${colors.black05};
`;
const StyledText = styled.div`
  color: ${colors.grayGreen};
  margin-bottom: 20px;
`;

const ResponseAlert = props => {
  const { message, onClick } = props;
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledText>{message}</StyledText>
        <StyledButton onClick={onClick}>Закрыть</StyledButton>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default ResponseAlert;
