import React, { Fragment, useState, useEffect } from 'react';

import { apiRequest } from '../../utilities/axiosConfig';

import {
  StyledMaincontent,
  StyledColumn,
} from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';

import WorksForm from '../WorksForm';
import WorksList from '../WorksList';
import ResponseAlert from '../ResponseAlert';

const WorksPage = props => {
  const [responseMessage, setResponseMessage] = useState('');
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest
      .get('/works', { mode: 'cors' })
      .then(response => {
        const { works } = response.data;
        console.log('WorksPage useEffect response.data', response.data);
        setWorks(works);
      })
      .catch(error => {
        console.log('BlogPage useEffect error', error);
        setError(error);
      });
  }, []);

  const showResponseMessage = message => {
    setResponseMessage(message);
  };
  const closeResponseMessage = () => {
    setResponseMessage('');
  };

  const deleteWork = id => () => {
    apiRequest.delete(`/works/${id}`, { mode: 'cors' }).then(response => {
      console.log('deleteWork response', response);
      if (response.status !== 201) {
        showResponseMessage(response.data.message);
        return;
      }
      setWorks(works.filter(work => work._id !== id));
      showResponseMessage(response.data.message);
    });
  };

  return (
    <Fragment>
      <StyledTitle>Страница «Мои работы»</StyledTitle>
      <StyledMaincontent>
        {responseMessage ? (
          <ResponseAlert
            message={responseMessage}
            onClick={closeResponseMessage}
          />
        ) : null}
        <StyledColumn>
          <WorksForm renderResponse={showResponseMessage} />
        </StyledColumn>
        <StyledColumn>
          {error ? (
            <div>Произошла ошибка загрузки: {error}</div>
          ) : (
            <WorksList works={works} deleteWork={deleteWork} />
          )}
        </StyledColumn>
      </StyledMaincontent>
    </Fragment>
  );
};

export default WorksPage;
