import React, { Fragment, useEffect } from 'react';

import { StyledMaincontent } from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';
import AboutForm from '../AboutForm';
import skills from './skills.json';

const AboutPage = props => {
  return (
    <Fragment>
      <StyledTitle>Страница «Обо мне»</StyledTitle>
      <StyledMaincontent>
        <AboutForm skills={skills} />
      </StyledMaincontent>
    </Fragment>
  );
};

export default AboutPage;
