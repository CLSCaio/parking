import React from "react";
declare type handler = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>;
declare type MenuProvider = {
    children: React.ReactNode;
};
export declare const MenuProvider: ({ children }: MenuProvider) => JSX.Element;
export declare const useMenuContext: () => {
    route: string;
    setRoute: React.Dispatch<React.SetStateAction<string>>;
    plate: string;
    setPlate: React.Dispatch<React.SetStateAction<string>>;
    changeView: (router?: string, event?: handler) => void;
};
export {};
//# sourceMappingURL=index.d.ts.map