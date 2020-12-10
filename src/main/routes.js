import react from "react";
import { BrowserRouter, renderRoutes } from "mage-react-router";

const App = () => <div>123</div>;

const routes = [
  {
    path: "/",
    component: App,
  },
];
export default () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
