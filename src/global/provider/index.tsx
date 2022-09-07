import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../resetCss";

import { ProviderProps } from "./interface";
import { themes } from "./content";

export const Provider = ({ children }: ProviderProps) => (
  <ThemeProvider theme={themes}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);
