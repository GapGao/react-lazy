import React from "react";
import { Link, renderRoutes } from "mage-react-router";

const A = ({ route }) => (
  <div>
    <Link to="/B">AAAAAAAAAAAAAAAAAAAAA</Link>
    {renderRoutes(route.routes)}
  </div>
);

export default A;
