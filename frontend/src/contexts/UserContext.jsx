import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useStateContext = () => useContext(UserContext);
// currentUser: {},
// setCurrentUser: () => {},
// userToken: null,
// setUserToken: () => {},

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    // const navigate = useNavigate();

    // 🔹 Login function
    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    // 🔹 Logout function
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
    };
    // // 🔹 Load user from localStorage on app startup
    // useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// export default UserProvider;
