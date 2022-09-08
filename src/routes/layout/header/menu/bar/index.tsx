import React from "react";
import { useNavigate } from "react-router-dom";
import { AvatarParking } from "../../../../../assets";
import { useMenuContext } from "../../../../../context";

import { BarProps } from "./interface";
import { Container, Button, Bars, Close } from "./styles";

export const Bar = ({ menu, openMenu, title }: BarProps) => {
  const navigate = useNavigate();
  const { changeView } = useMenuContext();

  const navigateToHome = (
    route: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    navigate("/");
    changeView(route, event);
  };

  return (
    <Container>
      <Button type="button" onClick={(e) => navigateToHome("entry", e)}>
        <AvatarParking />
      </Button>

      {!menu ? (
        <Bars onClick={() => openMenu(!menu)} />
      ) : (
        <Close onClick={() => openMenu(!menu)} />
      )}
    </Container>
  );
};
