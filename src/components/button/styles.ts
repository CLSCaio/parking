import styled, { css } from "styled-components";
import { colors } from "../../global";
import { ButtonStyles } from "./interface";

export const Container = styled.button<ButtonStyles>`
  width: 100%;
  height: 67px;

  border: none;
  outline: none;
  cursor: pointer;

  text-transform: uppercase;

  border-radius: 4px;

  ${({ variant, color }) =>
    !variant || variant === "default"
      ? css`
          color: ${colors.white};
          background-color: ${!color ? colors.sucess : color};
        `
      : css`color: ${!color ? colors.white : color};
          border: 2px solid ${color}};
          background-color: transparent`};

  :disabled {
    background-color: ${colors.disabled};
    color: ${colors.grey[200]};
    cursor: not-allowed;
  }
`;
