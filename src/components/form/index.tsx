import React, { ReactNode } from "react";

import { Container } from "./styles";

type FormProps = {
  children: ReactNode;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => (
  <Container onSubmit={onSubmit}>{children}</Container>
);
