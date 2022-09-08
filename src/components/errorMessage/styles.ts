import styled from "styled-components";
import { colors } from "../../global";

export const ErrorContainer = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  height: 32px;

  background-color: rgba(${colors.others[4]});

  color: ${colors.error};

  padding: 5px 10px;
  border-radius: 4px;
  gap: 8px;
  margin-top: 3px;

  svg {
    width: 23px;
    height: 23px;
  }
`;
