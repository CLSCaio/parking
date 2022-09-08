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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/index.js";
import routes from "./routes.js";
const Router = () => (React.createElement(BrowserRouter, null,
    React.createElement(Routes, null, routes.map((_a) => {
        var { component: Component } = _a, route = __rest(_a, ["component"]);
        return (React.createElement(Route, { key: route.href, path: route.href, element: React.createElement(Layout, null,
                React.createElement(Component, null)) }));
    }))));
export default Router;
