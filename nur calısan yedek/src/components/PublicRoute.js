import React from "react";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route {...rest} render={(props) => (token ? <Navigate to="/" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;
