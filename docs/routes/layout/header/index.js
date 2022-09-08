import React, { useState } from "react";
import { Bar, Opc } from "./menu/index.js";
import { Container, Divider, Separator } from "./styles.js";
const Header = ({ routes, maxW, title }) => {
    const [menu, openMenu] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, { menu: menu },
            React.createElement(Separator, { maxW: maxW },
                React.createElement(Bar, { openMenu: openMenu, menu: menu, title: title }),
                React.createElement(Opc, { routes: routes, openMenu: openMenu }))),
        React.createElement(Divider, null)));
};
export default Header;
