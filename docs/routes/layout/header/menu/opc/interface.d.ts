/// <reference types="react" />
import { Routes } from "../../../../../global/index.js";
export interface OpcProps {
    openMenu: React.Dispatch<React.SetStateAction<boolean>>;
    link?: {
        type: "next" | "react";
        colors?: [text: string, hover?: string];
        variant?: "default" | "doubleLine" | "underline";
    };
    routes: Routes[];
}
//# sourceMappingURL=interface.d.ts.map