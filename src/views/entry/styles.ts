import styled from "styled-components";
import { colors } from "../../global";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 312px;
  gap: 13px;
`;

export const Button = styled.button`
  width: 100%;
  height: 67px;

  border: none;
  outline: none;
  cursor: pointer;

  text-transform: uppercase;

  color: ${colors.white};

  border-radius: 4px;

  background-color: ${colors.sucess};

  :disabled {
    background-color: ${colors.disabled};
    color: ${colors.grey[200]};
    cursor: not-allowed;
  }
`;
