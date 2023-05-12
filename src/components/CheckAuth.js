import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

export default function CheckAuth({allowedRoles}) {
	let location = useLocation();
	const {isLoggedIn, roles} = useAuth();
	
	if (!isLoggedIn) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if(roles?.find(role => allowedRoles?.includes(role)) === undefined) {
		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	return <Outlet/>
}


