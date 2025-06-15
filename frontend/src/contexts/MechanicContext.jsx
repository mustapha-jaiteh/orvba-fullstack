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
    const [bookings, setBookings] = useState([]);
    const [services, setServices] = useState([]);

    //fetch bookings
    useEffect(() => {
        if (!mechanic?.mechanic_license) return;

        fetch(
            `http://127.0.0.1:8000/api/mechanic/bookings/${mechanic.mechanic_license}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setBookings(data);
                else console.warn(data.message);
            })
            .catch((err) => console.error("Error fetching bookings:", err));
    }, [mechanic]);

    //fetch services
    useEffect(() => {
        if (!mechanic?.mechanic_license) return;

        fetch(
            `http://127.0.0.1:8000/api/mechanic/services/${mechanic.mechanic_license}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setServices(data);
                else console.warn(data.message);
            })
            .catch((err) => console.error("Error fetching services:", err));
    }, [mechanic]);

    return (
        <MechanicContext.Provider
            value={{ mechanic, bookings, services, token, login, logout }}
        >
            {children}
        </MechanicContext.Provider>
    );
};
