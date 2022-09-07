import React from "react";
import { AvatarParking } from "../../../../../assets";

import { BarProps } from "./interface";
import { Container, Bars, Close } from "./styles";

export const Bar = ({ menu, openMenu, title }: BarProps) => (
  <Container>
    <AvatarParking />

    {!menu ? (
      <Bars onClick={() => openMenu(!menu)} />
    ) : (
      <Close onClick={() => openMenu(!menu)} />
    )}
  </Container>
);
