import { Home, Entry, Output, History } from "../views/index.js";
export default [
    {
        href: "/",
        component: Home,
        label: "Home",
    },
    {
        href: "/entry",
        component: Entry,
        label: "Entrada",
    },
    {
        href: "/output",
        component: Output,
        label: "Saída",
    },
    {
        href: "/history",
        component: History,
        label: "Historico",
    },
];
