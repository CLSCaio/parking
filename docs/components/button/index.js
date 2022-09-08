import React from "react";
import { Container } from "./styles.js";
export const Button = ({ disabled, loading, label, variant, color, onClick, }) => (React.createElement(Container, { onClick: onClick, disabled: disabled || loading, type: "submit", variant: variant, color: color }, label));
