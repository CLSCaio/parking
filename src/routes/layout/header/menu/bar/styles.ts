import styled from "styled-components";

import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

import { medias, colors } from "../../../../../global";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const Bars = styled(GoThreeBars)`
  display: flex;
  width: 36px;
  height: 36px;

  fill: ${colors.white};

  cursor: pointer;

  ${medias.xXsmall} {
    display: none;
  }
`;

export const Close = styled(AiOutlineClose)`
  display: flex;
  width: 36px;
  height: 36px;

  cursor: pointer;
  fill: ${colors.white};

  ${medias.xXsmall} {
    display: none;
  }
`;
