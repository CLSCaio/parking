import { createGlobalStyle } from "styled-components";

import { medias, sizes, weights, colors } from "../themes";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 11px;

    ${medias.small} {
      font-size: 13px;
    }

   ${medias.default} {
      font-size: 16px;
    }

   ${medias["fullHD+"]} {
      font-size: 19px;
    }

   ${medias["2k"]} {
      font-size: 22px;
    }

   ${medias["4k"]} {
      font-size: 24px;
    }
  }

  body, #root {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100vw;
    background-color:  ${colors.primary};
  }

  input {
    font-size: ${sizes.large};
    font-weight: ${weights.regular};
  }

  a {
    font-size: ${sizes.medium};
    font-weight: ${weights.bold};
  }

  button, p, label {
    font-size: ${sizes.default};
    font-weight: ${weights.regular};
  }

  h4 {
    font-size: ${sizes.small};
    font-weight: ${weights.bold};
  }
`;
