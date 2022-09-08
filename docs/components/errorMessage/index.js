import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ErrorContainer } from "./styles.js";
export const ErrorMessage = ({ error }) => (React.createElement(ErrorContainer, null,
    React.createElement(HiOutlineExclamationCircle, null),
    React.createElement("h5", null, error || "Ocorreu um erro na solicitação!")));
