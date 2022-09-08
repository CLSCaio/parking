import React from "react";
import { useMenuContext } from "../../context/index.js";
import { Entry, Output } from "../index.js";
import { Container, Group, Button } from "./styles.js";
export const Home = () => {
    const { route, changeView } = useMenuContext();
    return (React.createElement(Container, null,
        React.createElement(Group, null,
            React.createElement(Button, { type: "button", id: "b-entry", className: "open", onClick: (e) => changeView("entry", e) }, "Entrada"),
            React.createElement(Button, { type: "button", id: "b-output", onClick: (e) => changeView("output", e) }, "Sa\u00EDda")),
        React.createElement(Group, { customGroup: true }, route === "entry" ? React.createElement(Entry, null) : React.createElement(Output, null))));
};
//# sourceMappingURL=index.js.map