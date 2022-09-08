import React from "react";
import { MenuProvider } from "./context/index.js";
import { Provider } from "./global/index.js";
import Router from "./routes/index.js";
const App = () => (React.createElement(MenuProvider, null,
    React.createElement(Provider, null,
        React.createElement(Router, null))));
export default App;
//# sourceMappingURL=App.js.map