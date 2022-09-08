import React from "react";
import { useNavigate } from "react-router-dom";
import { AvatarParking } from "../../../../../assets/index.js";
import { useMenuContext } from "../../../../../context/index.js";
import { Container, Button, Bars, Close } from "./styles.js";
export const Bar = ({ menu, openMenu, title }) => {
    const navigate = useNavigate();
    const { changeView } = useMenuContext();
    const navigateToHome = (route, event) => {
        navigate("/");
        changeView(route, event);
    };
    return (React.createElement(Container, null,
        React.createElement(Button, { type: "button", onClick: (e) => navigateToHome("entry", e) },
            React.createElement(AvatarParking, null)),
        !menu ? (React.createElement(Bars, { onClick: () => openMenu(!menu) })) : (React.createElement(Close, { onClick: () => openMenu(!menu) }))));
};
//# sourceMappingURL=index.js.map