import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
    user: {},
    setUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });
    const [userToken, setUserToken] = useState("");
    return (
        <UserContext.Provider
            value={{ user, setUser, userToken, setUserToken }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const userStateContext = () => useContext(UserContext);

export default UserProvider;
