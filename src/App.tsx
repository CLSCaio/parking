import React from "react";

import { MenuProvider } from "./context";

import { Provider } from "./global";

import Router from "./routes";

const App = () => (
  <MenuProvider>
    <Provider>
      <Router />
    </Provider>
  </MenuProvider>
);

export default App;
