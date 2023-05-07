import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userLogged"));
    const [userDetails, setUserDetails] = useState();

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, userDetails, setUserDetails}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}