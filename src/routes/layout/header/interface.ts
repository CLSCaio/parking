import { Routes } from "../../../global";

export const sizes = {
  block: "100%",
  default: "1280px",
};

type width = "default" | "block";
type types = "fixed" | "static";

export interface HeaderProps {
  routes: Routes[];
  maxW?: width;
  type?: types;
  title?: string;
}

export interface HeaderStyles {
  menu?: boolean;
  maxW?: width;
  type?: types;
  routes?: Routes[];
}
