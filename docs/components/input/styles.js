import styled from "styled-components";
import { colors } from "../../global/index.js";
export const Group = styled.span `
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 7px;
`;
export const Label = styled.label `
  color: ${colors.grey[200]};
`;
export const Field = styled.input `
  width: 100%;
  height: 67px;
  background-color: ${colors.others[1]};
  text-align: center;

  color: ${({ errorStyle }) => (errorStyle ? colors.error : colors.black)};

  border: 1px solid ${colors.grey[100]};
  border-radius: 4px;
`;
//# sourceMappingURL=styles.js.map