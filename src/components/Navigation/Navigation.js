import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../../utilities/colors';

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  padding: 25px;
  min-width: 180px;
  background-color: ${colors.ligthGray};
  color: ${colors.green};
  border-right: 1px solid ${colors.white};
  text-align: center;
`;

const activeStyle = {
  backgroundColor: `${colors.white}`,
  color: `${colors.lightGreen}`,
};

const StyledNavigationPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.ligthGray};
`;

const Navigation = props => {
  return (
    <StyledNavigationPanel>
      <StyledLink to="/edit-about" activeStyle={activeStyle}>
        Обо мне
      </StyledLink>
      <StyledLink to="/edit-works" activeStyle={activeStyle}>
        Мои работы
      </StyledLink>
      <StyledLink to="/edit-blog" activeStyle={activeStyle}>
        Блог
      </StyledLink>
    </StyledNavigationPanel>
  );
};

export default Navigation;
