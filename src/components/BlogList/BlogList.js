import React from 'react';

import Item from '../Item';

const BlogList = props => {
  const { articles, deleteArticle } = props;

  return (
    <ul>
      {articles.map(article => (
        <Item content={article} key={article._id} deleteItem={deleteArticle} />
      ))}
    </ul>
  );
};

export default BlogList;
