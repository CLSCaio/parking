import styled from "styled-components";
import { colors, medias, weights } from "../../../global/index.js";
export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  ${medias.small} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }
`;
export const Group = styled.span `
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 17px 15px;

  border: 1px solid ${colors.grey[300]};
  box-shadow: 0px 2px 2px ${colors.others[3]};
  border-radius: 8px;

  h6 {
    text-transform: uppercase;
    color: ${colors.grey[200]};
  }

  h2 {
    font-weight: ${weights.regular};
    color: ${colors.others[5]};
  }

  hr {
    border-color: ${colors.black};
    width: 24px;
    margin-top: 5px;
  }

  ${medias.small} {
    max-width: 300px;
  }
`;
export const Divider = styled.span `
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;
