import React from "react";

import { MainProps } from "./interface";
import { Container } from "./styles";

const Main = ({ children }: MainProps) => <Container>{children}</Container>;

export default Main;
