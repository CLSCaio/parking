import React, { useState } from "react";

import { Bar, Opc } from "./menu";

import { HeaderProps } from "./interface";
import { Container, Divider, Separator } from "./styles";

const Header = ({ routes, maxW, type, title }: HeaderProps) => {
  const [menu, openMenu] = useState(false);

  return (
    <>
      <Container menu={menu} type={type} routes={routes}>
        <Separator maxW={maxW}>
          <Bar openMenu={openMenu} menu={menu} title={title} />

          <Opc routes={routes} openMenu={openMenu} />
        </Separator>
      </Container>
      <Divider />
    </>
  );
};

export default Header;
