import React from "react";

import { Provider } from "./global";

import Router from "./routes";

const App = () => (
  <Provider>
    <Router />
  </Provider>
);

export default App;
