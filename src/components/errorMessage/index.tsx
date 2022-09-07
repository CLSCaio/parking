import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { ErrorContainer } from "./styles";

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <ErrorContainer>
    <HiOutlineExclamationCircle />
    <h4>{error}</h4>
  </ErrorContainer>
);
