import React from "react";

import { ButtonProps } from "./interface";
import { Container } from "./styles";

export const Button = ({
  disabled,
  loading,
  label,
  variant,
  color,
}: ButtonProps) => (
  <Container
    disabled={disabled || loading}
    type="submit"
    variant={variant}
    color={color}
  >
    {label}
  </Container>
);
