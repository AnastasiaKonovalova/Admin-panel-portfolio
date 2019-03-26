import styled from 'styled-components';
import { media } from '../styledComponents/media';

export const StyledMaincontent = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0;
  display: flex;
  align-items: stretch;
  position: relative;
  flex: 1;

  ${media.tablet`
    flex-direction: column;
  `}
`;

export const StyledColumn = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.tablet`
    width: 100%;
  `}

  ${media.phoneLandscape`
    width: 100%;
  `}

  ${media.phone`
    padding: 0 10px;
  `}
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledFieldset = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
  position: relative;
`;
