import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./layout";

import routes from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ component: Component, ...route }) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Layout>
              <Component disabled />
            </Layout>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
