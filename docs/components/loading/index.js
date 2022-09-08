import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { colors } from "../../global/index.js";
import { Spinner } from "./spinner/index.js";
import { Container } from "./styles.js";
export const Loading = ({ isLoading, text, type }) => (React.createElement(Container, null,
    isLoading ? (React.createElement(Spinner, null)) : type === "sucess" ? (React.createElement(AiOutlineCheckCircle, { size: 61, color: colors.secundary })) : (React.createElement(MdErrorOutline, { size: 61, color: colors.error })),
    React.createElement("h4", null, text)));
