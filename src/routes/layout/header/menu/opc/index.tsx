import React from "react";

import { useMenuContext } from "../../../../../context";

import { OpcProps } from "./interface";
import { Container, Link } from "./styles";

export const Opc = ({ openMenu, routes }: OpcProps) => {
  const { route, setRoute } = useMenuContext();

  const onclick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    router: string
  ) => {
    event.preventDefault();
    const entry = document.getElementById("entry");
    const output = document.getElementById("output");

    const b_entry = document.getElementById("b-entry");
    const b_output = document.getElementById("b-output");

    const entryClass = entry && entry?.classList;
    const outputClass = output && output?.classList;

    const b_entryClass = b_entry && b_entry?.classList;
    const b_outputClass = b_output && b_output?.classList;

    if (router === "entry") {
      outputClass?.remove("open");
      b_outputClass?.remove("open");

      entryClass?.add("open");
      b_entryClass?.add("open");
    } else {
      entryClass?.remove("open");
      b_entryClass?.remove("open");

      outputClass?.add("open");
      b_outputClass?.add("open");
    }

    setRoute(router);
    openMenu(false);
  };

  return (
    <Container>
      {routes.map(
        ({ label, href }) =>
          href !== "/*" &&
          href !== "/" && (
            <Link
              key={label}
              href={route === "entry" ? "/entrada" : "/saída"}
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
