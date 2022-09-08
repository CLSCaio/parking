import styled from "styled-components";
import { colors, sizes } from "../../../global";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  padding: 0 14px;
  * {
    width: 100%;
    text-align: center;
  }

  h4 {
    max-width: 170px;
  }

  h1,
  a {
    text-transform: uppercase;
    color: ${colors.secundary};
    text-decoration: none;
  }

  a {
    font-size: ${sizes.default};
  }
`;

export const Group = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
