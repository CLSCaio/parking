import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { LoadingProps } from "./interface";

import { colors } from "../../global";

import { Spinner } from "./spinner";
import { Container } from "./styles";

export const Loading = ({ isLoading, text, type }: LoadingProps) => (
  <Container>
    {isLoading ? (
      <Spinner />
    ) : type === "sucess" ? (
      <AiOutlineCheckCircle size={61} color={colors.secundary} />
    ) : (
      <MdErrorOutline size={61} color={colors.error} />
    )}
    <h3>{text}</h3>
  </Container>
);
