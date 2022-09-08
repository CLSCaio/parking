import React from "react";
import { useNavigate } from "react-router-dom";

import { useMenuContext } from "../../../../../context";

import { OpcProps } from "./interface";
import { Container, Link } from "./styles";

export const Opc = ({ openMenu, routes }: OpcProps) => {
  const { changeView } = useMenuContext();
  const navigate = useNavigate();

  const onclick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    router: string
  ) => {
    changeView(router, event);
    navigate("/");
    openMenu(false);
  };

  return (
    <Container>
      {routes.map(
        ({ label, href }) =>
          href !== "/*" &&
          href !== "/" &&
          href !== "/history" && (
            <Link
              key={label}
              href="/"
              onClick={(e) => onclick(e, href.replace("/", ""))}
              id={href.replace("/", "")}
              className={href === "/entry" ? "open" : ""}
            >
              {label}
            </Link>
          )
      )}
    </Container>
  );
};
