import styled from 'styled-components';

import { colors } from '../../utilities/colors';
import { media } from '../styledComponents/media';
import editIcon from '../../icons/edit.svg';
import closeIcon from '../../icons/close.svg';

export const StyledButton = styled.button`
  padding: 15px;
  border-radius: 5px;
  color: ${colors.white};
  background-color: ${colors.lightGreen};
  font-weight: 400;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.green};
  }
  &:disabled {
    background-color: ${colors.gray};
  }
`;
export const StyledEditButton = styled.button`
  background-image: url(${editIcon});
  background-size: cover;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 20px;
`;
export const StyledCloseButton = styled.button`
  background-image: url(${closeIcon});
  background-size: cover;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  margin-right: 20px;
`;
export const StyledInput = styled.input`
  padding: 15px;
  margin-right: 10px;
  border-radius: 3px;
  width: 300px;
  color: ${colors.grayMedium};

  ${media.tablet`
    margin-right: 0;
  `}
  ${media.phone`
    width: 100%;
  `}
`;
export const StyledTextarea = styled.textarea`
  padding: 15px;
  margin-right: 10px;
  border-radius: 3px;
  width: 100%;
  height: 140px;
  resize: none;
  color: ${colors.grayMedium};
  flex: 1;

  ${media.tablet`
  margin-right: 0;
    width: 500px;
    height: 300px;
  `}

  ${media.phone`
    width: 100%;
    height: 250px;
  `}
  ${media.phoneLandscape`
    width: 100%;
    height: 200px;
  `}
`;

export const StyledErrorSpan = styled.span`
  color: ${colors.red};
  font-weight: 300;
  font-size: 13px;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(10%);
`;

export const StyledSubtitle = styled.h3`
  color: ${colors.grayGreen};
  margin-bottom: 20px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const StyledTitle = styled.h2`
  font-size: 21px;
  color: ${colors.grayGreen};
  font-weight: 500;
  margin-top: 30px;
  margin-left: 30px;

  ${media.phone`
    margin-left: 10px;
  `}
`;
