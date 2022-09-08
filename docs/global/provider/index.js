import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../resetCss/index.js";
import { themes } from "./content.js";
export const Provider = ({ children }) => (React.createElement(ThemeProvider, { theme: themes },
    React.createElement(React.Fragment, null,
        children,
        React.createElement(GlobalStyle, null))));
//# sourceMappingURL=index.js.map