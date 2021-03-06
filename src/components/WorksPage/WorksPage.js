import React, { Fragment, useState, useEffect } from 'react';

import { apiRequest } from '../../utilities/axiosConfig';

import {
  StyledMaincontent,
  StyledColumn
} from '../styledComponents/styledLayouts';
import { StyledTitle } from '../styledComponents/styledComponents';

import WorksForm from '../WorksForm';
import WorksList from '../WorksList';
import ResponseAlert from '../ResponseAlert';

const WorksPage = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiRequest
      .get('/works')
      .then(response => {
        const { works } = response.data;
        setWorks(works);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const showResponseMessage = message => {
    setResponseMessage(message);
  };
  const closeResponseMessage = () => {
    setResponseMessage('');
  };
  const addWorkToState = work => {
    setWorks([...works, work]);
  };
  const deleteWork = id => () => {
    apiRequest.delete(`/works/${id}`).then(response => {
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
          <WorksForm
            renderResponse={showResponseMessage}
            addWorkToState={addWorkToState}
          />
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
