import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import Item from '../Item';

const WorksList = props => {
  const { works, deleteWork } = props;

  return (
    <ul>
      {works.map(work => (
        <Item content={work} key={work._id} deleteItem={deleteWork} />
      ))}
    </ul>
  );
};

export default WorksList;
