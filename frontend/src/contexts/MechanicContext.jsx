import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const UserContext = createContext({
    user: {},
    setUser: () => {},
    bookings: [],
    userToken: null,
    setUserToken: () => {},
});

//booking data sample
export const tempBookings = [
    {
        id: 1,
        name: "Range Rover",
        mechanic: "Lamin Ceesay",
        status: "pending",
        location: "Brikama",
        vehicleType: "private",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
    {
        id: 2,
        name: "Benz",
        mechanic: "Binta Badjie",
        status: "completed",
        location: "Sanchaba",
        vehicleType: "gytytytyt",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
    {
        id: 3,
        name: "Van",
        mechanic: "Lamin Ceesay",
        status: "completed",
        location: "Foni",
        vehicleType: "hghjgjghjg",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
    {
        id: 4,
        name: "Nissan Pathfinder",
        mechanic: "Lamin Ceesay",
        status: "completed",
        location: "Brikama",
        vehicleType: "dfgrtt",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
    {
        id: 5,
        name: "Toyota Rav4",
        mechanic: "Binta Badjie",
        status: "in progress",
        location: "Sanchaba",
        vehicleType: "trtrtrt",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
    {
        id: 6,
        name: "BMW X5",
        mechanic: "Lamin Ceesay",
        status: "in progress",
        location: "Foni",
        vehicleType: "gffgfgf",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
        time: "20:34:46",
    },
];
export const getBookingById = (id) => tempBookings.find((req) => req.id == id);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });
    const [userToken, setUserToken] = useState("123");
    const [bookings, setBookings] = useState(tempBookings);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                userToken,
                setUserToken,
                bookings,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useStateContext = () => useContext(UserContext);

export default UserProvider;
