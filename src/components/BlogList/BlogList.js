import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from '../styledComponents/styledLayouts';
import Item from '../Item';

const BlogList = ({ articles, deleteArticle }) => {
  return (
    <StyledList>
      {articles.map(article => (
        <Item content={article} key={article._id} deleteItem={deleteArticle} />
      ))}
    </StyledList>
  );
};

BlogList.propTypes = {
  articles: PropTypes.array,
  deleteArticle: PropTypes.func,
};

export default BlogList;
