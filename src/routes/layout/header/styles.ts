import styled, { css } from "styled-components";

import { medias, colors } from "../../../global";

import { HeaderStyles, sizes } from "./interface";

export const Container = styled.header<HeaderStyles>`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  height: ${({ menu }) => (menu ? "100vh" : "60px")};

  overflow: hidden;
  top: 0;

  position: fixed;

  background: ${colors.secundary};

  transition: 0.7s;

  ${medias.xXsmall} {
    align-items: center;
    justify-content: center;
    height: 60px;
  }

  z-index: 99;
`;

export const Separator = styled.span<HeaderStyles>`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;

  ${medias.xXsmall} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    max-width: ${({ maxW }) =>
      maxW && maxW === "block" ? sizes.block : sizes.default};
  }
`;

export const Divider = styled.span`
  height: 75px;
`;
