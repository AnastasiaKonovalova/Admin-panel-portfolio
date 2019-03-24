import { colors } from '../../utilities/colors';
import styled from 'styled-components';

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
export const StyledInput = styled.input`
  padding: 15px;
  margin-right: 10px;
  border-radius: 3px;
  width: 300px;
  color: ${colors.grayMedium};
`;
export const StyledTextarea = styled.textarea`
  padding: 15px;
  margin-right: 10px;
  border-radius: 3px;
  width: 100%;
  height: 170px;
  resize: none;
  color: ${colors.grayMedium};
  flex: 1;
`;

export const StyledErrorSpan = styled.span`
  color: ${colors.red};
  font-weight: 400;
  position: absolute;
  top: 105%;
  left: 0;
`;

export const StyledSubtitle = styled.h3`
  color: ${colors.grayGreen};
  margin-bottom: 20px;
  font-weight: 400;
`;

export const StyledTitle = styled.h2`
  font-size: 21px;
  color: ${colors.grayGreen};
  font-weight: 400;
  margin-top: 50px;
  margin-left: 30px;
`;
