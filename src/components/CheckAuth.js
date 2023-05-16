import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

export default function CheckAuth({ allowedRoles }) {
  let location = useLocation();
  const { isLoggedIn, roles } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles?.find(role => allowedRoles?.includes(role)) === undefined) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />
}


