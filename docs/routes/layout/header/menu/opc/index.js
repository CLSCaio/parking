import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../../../../../context/index.js";
import { Container, Link } from "./styles.js";
export const Opc = ({ openMenu, routes }) => {
    const { changeView } = useMenuContext();
    const navigate = useNavigate();
    const onclick = (event, router) => {
        changeView(router, event);
        navigate("/");
        openMenu(false);
    };
    return (React.createElement(Container, null, routes.map(({ label, href }) => href !== "/*" &&
        href !== "/" &&
        href !== "/history" && (React.createElement(Link, { key: label, href: "/", onClick: (e) => onclick(e, href.replace("/", "")), id: href.replace("/", ""), className: href === "/entry" ? "open" : "" }, label)))));
};
