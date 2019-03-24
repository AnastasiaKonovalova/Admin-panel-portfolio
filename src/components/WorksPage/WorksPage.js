import React, { Fragment } from 'react';

import {
  StyledMaincontent,
  StyledColumn,
} from '../styledComponents/styledLayouts';

import { StyledTitle } from '../styledComponents/styledComponents';

import styled from 'styled-components';
import { colors } from '../../utilities/colors';

import WorksForm from '../WorksForm';

const WorksPage = props => {
  return (
    <Fragment>
      <StyledTitle>Страница «Мои работы»</StyledTitle>
      <StyledMaincontent>
        <StyledColumn>
          <WorksForm />
        </StyledColumn>
        <StyledColumn>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </StyledColumn>
      </StyledMaincontent>
    </Fragment>
  );
};

export default WorksPage;
