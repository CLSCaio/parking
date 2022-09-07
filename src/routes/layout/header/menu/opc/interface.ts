import { Routes } from "../../../../../global";

export interface OpcProps {
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  link?: {
    type: "next" | "react";
    colors?: [text: string, hover?: string];
    variant?: "default" | "doubleLine" | "underline";
  };
  routes: Routes[];
}
