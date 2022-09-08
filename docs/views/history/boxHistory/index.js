import React from "react";
import { Container, Group, Divider } from "./styles.js";
const BoxHistory = ({ list }) => (React.createElement(Container, null, list === null || list === void 0 ? void 0 : list.map(({ time, paid }) => (React.createElement(Group, { key: time },
    React.createElement(Divider, null,
        React.createElement("h6", null, " tempo atual "),
        React.createElement("h2", null, time
            .replace("hours", "h")
            .replace("minutes", "min")
            .replace("seconds", "sec")
            .replaceAll(" ", ""))),
    React.createElement(Divider, null,
        React.createElement("h6", null, " pagamento "),
        React.createElement("h2", null, paid ? "Pago" : React.createElement("hr", null))))))));
export default BoxHistory;
