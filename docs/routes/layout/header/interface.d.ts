import { Routes } from "../../../global/index.js";
export declare const sizes: {
    block: string;
    default: string;
};
declare type width = "default" | "block";
export interface HeaderProps {
    routes: Routes[];
    maxW?: width;
    title?: string;
}
export interface HeaderStyles {
    menu?: boolean;
    maxW?: width;
}
export {};
//# sourceMappingURL=interface.d.ts.map