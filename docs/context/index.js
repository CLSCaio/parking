/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useContext } from "react";
const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
    const [route, setRoute] = useState("entry");
    const [plate, setPlate] = useState("");
    const changeView = (router, event) => {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        const entry = document.getElementById("entry");
        const output = document.getElementById("output");
        const b_entry = document.getElementById("b-entry");
        const b_output = document.getElementById("b-output");
        const entryClass = entry && (entry === null || entry === void 0 ? void 0 : entry.classList);
        const outputClass = output && (output === null || output === void 0 ? void 0 : output.classList);
        const b_entryClass = b_entry && (b_entry === null || b_entry === void 0 ? void 0 : b_entry.classList);
        const b_outputClass = b_output && (b_output === null || b_output === void 0 ? void 0 : b_output.classList);
        if (!router) {
            outputClass === null || outputClass === void 0 ? void 0 : outputClass.remove("open");
            b_outputClass === null || b_outputClass === void 0 ? void 0 : b_outputClass.remove("open");
            entryClass === null || entryClass === void 0 ? void 0 : entryClass.remove("open");
            b_entryClass === null || b_entryClass === void 0 ? void 0 : b_entryClass.remove("open");
            setRoute("");
        }
        else {
            if (router === "entry") {
                outputClass === null || outputClass === void 0 ? void 0 : outputClass.remove("open");
                b_outputClass === null || b_outputClass === void 0 ? void 0 : b_outputClass.remove("open");
                entryClass === null || entryClass === void 0 ? void 0 : entryClass.add("open");
                b_entryClass === null || b_entryClass === void 0 ? void 0 : b_entryClass.add("open");
            }
            else {
                entryClass === null || entryClass === void 0 ? void 0 : entryClass.remove("open");
                b_entryClass === null || b_entryClass === void 0 ? void 0 : b_entryClass.remove("open");
                outputClass === null || outputClass === void 0 ? void 0 : outputClass.add("open");
                b_outputClass === null || b_outputClass === void 0 ? void 0 : b_outputClass.add("open");
            }
            setRoute(router);
        }
    };
    return (React.createElement(MenuContext.Provider, { value: { route, setRoute, plate, setPlate, changeView } }, children));
};
export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context)
        throw new Error("useMenuContext must be used within a MenuProvider");
    const { route, setRoute, plate, setPlate, changeView } = context;
    return { route, setRoute, plate, setPlate, changeView };
};
//# sourceMappingURL=index.js.map