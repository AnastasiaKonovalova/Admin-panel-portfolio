import React from 'react';

import { StyledList } from '../styledComponents/styledLayouts';
import Item from '../Item';

const WorksList = props => {
  const { works, deleteWork } = props;

  return (
    <StyledList>
      {works.map(work => (
        <Item content={work} key={work._id} deleteItem={deleteWork} />
      ))}
    </StyledList>
  );
};

export default WorksList;
