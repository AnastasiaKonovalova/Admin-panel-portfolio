import React from 'react';
import styled from 'styled-components';

import {
  StyledEditButton,
  StyledCloseButton,
} from '../../styledComponents/styledComponents';
import { colors } from '../../../utilities/colors';

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
const StyledDate = styled.span`
  color: ${colors.green};
  text-align: right;
`;
const StyledArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BlogItem = props => {
  const { title, date, text, _id } = props.article;
  const { deleteArticle } = props;

  return (
    <StyledItem>
      <StyledEditButton />
      <StyledCloseButton onClick={deleteArticle(_id)} />
      <StyledArticle>
        <StyledText>{title}</StyledText>
        <StyledDate>{date}</StyledDate>
      </StyledArticle>
    </StyledItem>
  );
};

export default BlogItem;
