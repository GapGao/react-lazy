import React, { lazy } from "react";
import { BrowserRouter, renderRoutes } from "mage-react-router";

const A = lazy(() => import("./pages/A"));
const B = lazy(() => import("./pages/B"));

const Loading = () => <div>loading</div>;

const routes = [
  {
    path: "/C",
    component: B,
    fallback: <Loading />,
  },
  {
    path: "/",
    component: A,
    fallback: <Loading />,
    routes: [
      {
        path: "/B",
        component: B,
        fallback: <Loading />,
      },
    ],
  },
];
export default () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
