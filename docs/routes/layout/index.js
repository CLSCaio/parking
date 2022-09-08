import React from "react";
import routes from "../routes.js";
import Main from "./main/index.js";
import Header from "./header/index.js";
export const Layout = ({ children }) => (React.createElement(React.Fragment, null,
    React.createElement(Header, { routes: routes }),
    React.createElement(Main, null, children)));
