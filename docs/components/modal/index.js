var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Base, BackGround, CloseIcon } from "./styles.js";
export const Modal = (_a) => {
    var { isVisible, closeModal, children, withoutClose } = _a, rest = __rest(_a, ["isVisible", "closeModal", "children", "withoutClose"]);
    return isVisible ? (React.createElement(Base, Object.assign({}, rest),
        React.createElement(BackGround, Object.assign({}, rest),
            !withoutClose && (React.createElement(CloseIcon, { size: 25, onClick: () => closeModal(false) })),
            children))) : null;
};
