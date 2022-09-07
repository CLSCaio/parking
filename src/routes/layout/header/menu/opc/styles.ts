import styled from "styled-components";

import { colors, medias } from "../../../../../global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 40px;
  gap: 25px;

  ${medias.xXsmall} {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: max-content;
    padding: 0;
    gap: 50px;
  }

  .open {
    color: ${colors.black};

    :hover {
      text-decoration: none;
      cursor: not-allowed;
    }
  }
`;

export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;

  :hover {
    color: ${colors.black};
    text-decoration: underline;
  }
`;
