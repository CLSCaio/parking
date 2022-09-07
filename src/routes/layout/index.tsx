import React from "react";

import Main from "./main";

import { LayoutProps } from "./interface";

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);
