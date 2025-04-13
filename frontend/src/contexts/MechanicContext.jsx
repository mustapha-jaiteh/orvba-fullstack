import { createContext, useState, useEffect, useContext } from "react";

const MechanicContext = createContext();

export const useMechanicContext = () => useContext(MechanicContext);

export const MechanicProvider = ({ children }) => {
    const [mechanic, setMechanic] = useState(null);
    const [token, setToken] = useState(null);

    const login = (mechanicData, authToken) => {
        setMechanic(mechanicData);
        setToken(authToken);
        localStorage.setItem("mechanicToken", authToken);
        localStorage.setItem("mechanicData", JSON.stringify(mechanicData));
    };

    const logout = () => {
        setMechanic(null);
        setToken(null);
        localStorage.removeItem("mechanicToken");
        localStorage.removeItem("mechanicData");
    };

    // useEffect(() => {
    //     const storedMechanic = localStorage.getItem("mechanic");
    //     if (storedMechanic) {
    //         setMechanic(JSON.parse(storedMechanic));
    //     }
    // }, []);

    return (
        <MechanicContext.Provider value={{ mechanic, token, login, logout }}>
            {children}
        </MechanicContext.Provider>
    );
};
