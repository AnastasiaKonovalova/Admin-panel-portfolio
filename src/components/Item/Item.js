import React from 'react';
import styled from 'styled-components';

import {
  StyledEditButton,
  StyledCloseButton
} from '../styledComponents/styledComponents';
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

const Item = props => {
  const { title, _id } = props.content;
  const { deleteItem } = props;

  return (
    <StyledItem>
      <StyledEditButton />
      <StyledCloseButton onClick={deleteItem(_id)} />
      <StyledText>{title}</StyledText>
    </StyledItem>
  );
};

export default Item;
