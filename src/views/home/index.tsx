import React from "react";

import { useMenuContext } from "../../context";

import { Entry, Output } from "../index";

import { Container, Group, Button } from "./styles";

export const Home = () => {
  const { route, changeView } = useMenuContext();

  return (
    <Container>
      <Group>
        <Button
          type="button"
          id="b-entry"
          className="open"
          onClick={(e) => changeView("entry", e)}
        >
          Entrada
        </Button>
        <Button
          type="button"
          id="b-output"
          onClick={(e) => changeView("output", e)}
        >
          Saída
        </Button>
      </Group>

      <Group customGroup>{route === "entry" ? <Entry /> : <Output />}</Group>
    </Container>
  );
};
