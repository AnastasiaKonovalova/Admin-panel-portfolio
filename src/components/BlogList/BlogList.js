import React from 'react';

import { StyledList } from '../styledComponents/styledLayouts';
import Item from '../Item';

const BlogList = props => {
  const { articles, deleteArticle } = props;

  return (
    <StyledList>
      {articles.map(article => (
        <Item content={article} key={article._id} deleteItem={deleteArticle} />
      ))}
    </StyledList>
  );
};

export default BlogList;
