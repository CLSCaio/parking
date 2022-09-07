import styled from "styled-components";
import { colors, medias } from "../../global";

type homeStyles = {
  customGroup?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const Group = styled.span<homeStyles>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ customGroup }) =>
    customGroup ? colors.white : "transparent"};

  padding: ${({ customGroup }) => (customGroup ? "38px 16px 64px 16px" : 0)};

  .open {
    background-color: ${colors.white};
    color: ${colors.secundary};
    border-bottom: 3px solid ${colors.secundary};
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 48px;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  color: ${colors.grey[200]};

  ${medias.xXsmall} {
    max-width: 172px;
  }
`;
