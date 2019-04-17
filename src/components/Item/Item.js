import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledCloseButton } from '../styledComponents/styledComponents';
import { colors } from '../../utilities/colors';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 1px solid ${colors.gray};
`;
const StyledText = styled.span`
  color: ${colors.grayGreen};
  margin-right: 15px;
`;

const Item = ({ content: { title, _id }, deleteItem }) => {
  return (
    <StyledItem>
      <StyledCloseButton onClick={deleteItem(_id)} />
      <StyledText>{title}</StyledText>
    </StyledItem>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  _id: PropTypes.string,
  deleteItem: PropTypes.func
};

export default Item;
