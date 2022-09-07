import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./layout";

import routes from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component: Component, ...route }) => (
        <Route
          key={route.href}
          path={route.href}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
