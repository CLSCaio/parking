import React from "react";
import { Container } from "./styles.js";
export const Form = ({ children, onSubmit }) => (React.createElement(Container, { onSubmit: onSubmit }, children));
