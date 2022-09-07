import React from "react";

import { useMenuContext } from "../../context";

import { Entry, Output } from "../index";

import { Container, Group, Button } from "./styles";

export const Home = () => {
  const { route, setRoute } = useMenuContext();

  const onclick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
  };

  return (
    <Container>
      <Group>
        <Button
          type="button"
          id="b-entry"
          className="open"
          onClick={(e) => onclick(e, "entry")}
        >
          Entrada
        </Button>
        <Button
          type="button"
          id="b-output"
          onClick={(e) => onclick(e, "output")}
        >
          Saída
        </Button>
      </Group>

      <Group customGroup>{route === "entry" ? <Entry /> : <Output />}</Group>
    </Container>
  );
};
