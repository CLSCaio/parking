/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useContext } from "react";

type contextProps = {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

const MenuContext = createContext<contextProps | null>(null);

type MenuProvider = {
  children: React.ReactNode;
};

export const MenuProvider = ({ children }: MenuProvider) => {
  const [route, setRoute] = useState<string>("entry");

  return (
    <MenuContext.Provider value={{ route, setRoute }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("useMenuContext must be used within a MenuProvider");
  const { route, setRoute } = context;
  return { route, setRoute };
};
