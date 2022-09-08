import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { colors, medias } from "../../global/index.js";
export const Base = styled.span `
  width: 100%;
  height: 100%;

  max-width: ${({ maxW }) => maxW || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ withoutBase }) => !withoutBase
    ? css `
          position: fixed;
          top: 45px;
          z-index: 100;
          background: rgba(0, 0, 0, 0.6);
          padding: 20px 11px;
          ${medias.small} {
            top: 0px;
          }
        `
    : css `
          background: transparent;
        `}
`;
export const BackGround = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: ${({ height }) => height || "auto"};
  border-radius: 4px;
  background: ${colors.white};

  position: relative;

  ${({ withoutBase }) => !withoutBase &&
    css `
      ${medias.small} {
        max-width: 500px;
      }
    `};
`;
export const CloseIcon = styled(AiOutlineClose) `
  position: absolute;
  top: 10px;
  right: 10px;
`;
