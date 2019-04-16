import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from '../styledComponents/styledLayouts';
import Item from '../Item';

const WorksList = ({ works, deleteWork }) => {
  return (
    <StyledList>
      {works.map(work => (
        <Item content={work} key={work._id} deleteItem={deleteWork} />
      ))}
    </StyledList>
  );
};

WorksList.propTypes = {
  works: PropTypes.array,
  deleteWork: PropTypes.func,
};

export default WorksList;
