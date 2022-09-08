import { Routes } from "../../../global";

export const sizes = {
  block: "100%",
  default: "1280px",
};

type width = "default" | "block";

export interface HeaderProps {
  routes: Routes[];
  maxW?: width;
  title?: string;
}

export interface HeaderStyles {
  menu?: boolean;
  maxW?: width;
}
