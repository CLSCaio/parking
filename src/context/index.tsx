/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useContext } from "react";

type handler =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>;

type contextProps = {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
  plate: string;
  setPlate: React.Dispatch<React.SetStateAction<string>>;
  changeView: (router?: string, event?: handler) => void;
};

const MenuContext = createContext<contextProps | null>(null);

type MenuProvider = {
  children: React.ReactNode;
};

export const MenuProvider = ({ children }: MenuProvider) => {
  const [route, setRoute] = useState<string>("entry");
  const [plate, setPlate] = useState<string>("");

  const changeView = (router?: string, event?: handler) => {
    event?.preventDefault();
    const entry = document.getElementById("entry");
    const output = document.getElementById("output");

    const b_entry = document.getElementById("b-entry");
    const b_output = document.getElementById("b-output");

    const entryClass = entry && entry?.classList;
    const outputClass = output && output?.classList;

    const b_entryClass = b_entry && b_entry?.classList;
    const b_outputClass = b_output && b_output?.classList;

    if (!router) {
      outputClass?.remove("open");
      b_outputClass?.remove("open");
      entryClass?.remove("open");
      b_entryClass?.remove("open");

      setRoute("");
    } else {
      if (router === "entry") {
        outputClass?.remove("open");
        b_outputClass?.remove("open");

        entryClass?.add("open");
        b_entryClass?.add("open");
      } else {
        entryClass?.remove("open");
        b_entryClass?.remove("open");

        outputClass?.add("open");
        b_outputClass?.add("open");
      }

      setRoute(router);
    }
  };

  return (
    <MenuContext.Provider
      value={{ route, setRoute, plate, setPlate, changeView }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("useMenuContext must be used within a MenuProvider");
  const { route, setRoute, plate, setPlate, changeView } = context;
  return { route, setRoute, plate, setPlate, changeView };
};
