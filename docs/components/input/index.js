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
import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { ErrorMessage } from "../errorMessage/index.js";
import { Group, Label, Field } from "./styles.js";
export const Input = (_a) => {
    var { color, label, placeholder, error } = _a, rest = __rest(_a, ["color", "label", "placeholder", "error"]);
    const [field, meta] = useField(rest);
    const [err, setErr] = useState(false);
    const [errorStyle, setErrorStyle] = useState(undefined);
    const handleBlur = (event) => {
        field.onBlur(event);
    };
    useEffect(() => {
        if ((meta.touched && meta.error) || error) {
            setErr(true);
            setErrorStyle("error");
        }
        if (!meta.error || !error) {
            setErr(false);
            setErrorStyle(undefined);
        }
    }, [meta.touched && meta.error]);
    return (React.createElement(Group, null,
        React.createElement(Label, null, label),
        React.createElement(Field, Object.assign({}, rest, field, { errorStyle: errorStyle, type: "text", placeholder: placeholder, onBlur: handleBlur })),
        err && React.createElement(ErrorMessage, { error: error || meta.error })));
};
