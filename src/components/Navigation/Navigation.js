import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../../utilities/colors';
import { media } from '../styledComponents/media';

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 20px 25px;
  min-width: 180px;
  background-color: ${colors.ligthGray};
  color: ${colors.green};
  text-align: center;
  flex: 1;
  &:not(:last-of-type) {
    border-right: 1px solid ${colors.white};
  }

  ${media.phone`
    width: 100%;
    border-right: none;
    &:not(:last-of-type){
      border-bottom: 1px solid ${colors.white};
    }
  `}
`;

const activeStyle = {
  backgroundColor: `${colors.white}`,
  color: `${colors.lightGreen}`,
};

const StyledNavigationPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.ligthGray};

  ${media.phone`
    flex-direction: column;
    align-items: center;
  `}
`;

const Navigation = props => {
  return (
    <StyledNavigationPanel>
      <StyledLink to="/admin/edit-about" activeStyle={activeStyle}>
        Обо мне
      </StyledLink>
      <StyledLink to="/admin/edit-works" activeStyle={activeStyle}>
        Мои работы
      </StyledLink>
      <StyledLink to="/admin/edit-blog" activeStyle={activeStyle}>
        Блог
      </StyledLink>
    </StyledNavigationPanel>
  );
};

export default Navigation;
