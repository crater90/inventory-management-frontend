import { Outlet, Navigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function CheckAuth() {
	//let auth = useAuth();
	let location = useLocation();
	const {isLoggedIn} = useContext(AuthContext);
	console.log(isLoggedIn);
	//if (!auth.user) {
	if (!isLoggedIn) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
}


