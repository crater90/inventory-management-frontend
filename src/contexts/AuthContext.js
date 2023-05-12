import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userLogged"));
    const [userDetails, setUserDetails] = useState(null);
    const [roles, setRoles] = useState([]);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, roles, setRoles}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}