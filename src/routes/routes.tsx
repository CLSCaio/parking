import { Home, Entry, Output } from "../views";

import { Routes } from "../global";

export default [
  {
    href: "/",
    component: Home,
    public: true,
    label: "Home",
  },
  {
    href: "/entry",
    component: Entry,
    public: true,
    label: "Entrada",
  },
  {
    href: "/output",
    component: Output,
    public: true,
    label: "Saída",
  },
] as Routes[];
