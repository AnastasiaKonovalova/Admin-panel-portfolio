import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utilities/colors';
import { media } from '../styledComponents/media';

const StyledContainer = styled.header`
  background-color: ${colors.lightGreen};
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.phone`
    padding: 15px;
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

const StyledHeader = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${colors.white};

  ${media.tablet`
    font-size: 21px;
  `}

  ${media.phone`
    text-align: center;
    margin-top: 10px;
  `}
`;

const StyledLink = styled.a`
  font-weight: 300;
  color: ${colors.white07};
  border-bottom: 1px solid transparent;
  transition: 0.3s;

  &:hover {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }

  ${media.tablet`
    border-bottom: 1px solid ${colors.white07};
  `}
`;

const Header = props => {
  return (
    <StyledContainer>
      <StyledHeader>Панель администрирования</StyledHeader>
      <StyledLink href="#">Вернуться на сайт</StyledLink>
    </StyledContainer>
  );
};

export default Header;
