import React from "react";

import routes from "../routes";

import Main from "./main";
import Header from "./header";

import { LayoutProps } from "./interface";

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header routes={routes} />
    <Main>{children}</Main>
  </>
);
