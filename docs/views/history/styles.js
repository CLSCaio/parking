import styled from "styled-components";
import { colors } from "../../global/index.js";
export const Content = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 250px;
  gap: 30px;

  * {
    color: ${colors.secundary};
  }

  h2 {
    width: 250px;
    text-align: center;
  }

  button {
    border-bottom: 2px solid ${colors.secundary};
  }
`;
export const Container = styled.div `
  max-width: 1100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 22px 17px;
  border-radius: 4px;
  background: ${colors.white};
  gap: 19px;
`;
export const Group = styled.span `
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12.5px;

  h2 {
    color: ${colors.secundary};
  }
`;
export const Button = styled.button `
  border: none;
  outline: 0;
  cursor: pointer;
  background: transparent;
  display: flex;
`;
