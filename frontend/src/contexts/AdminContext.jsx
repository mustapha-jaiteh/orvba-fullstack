import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import mustik from "../assets/images/mustik.jpeg";
import kawsu from "../assets/images/kawsu.jpg";
import hawa from "../assets/images/hawa.jpg";
import kaddy from "../assets/images/kaddy.jpg";
import demi from "../assets/images/demi.jpg";

//booking data sample
export const tempBookings = [
    {
        id: 1,
        vehicleName: "Range Rover",
        licensePlate: "BJL 123456",
        vehicleOwner: "Tom Cook",
        email: "tom@example.com",
        phone: "5678910",
        location: "Brikama",

        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
    },
    {
        id: 2,
        vehicleName: "Benz",
        licensePlate: "23456789",
        vehicleOwner: "Binta Badjie",
        email: "bbadjie@example.com",
        phone: "5678910",
        location: "Sanchaba",

        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/20/2024",
    },
    {
        id: 3,
        vehicleName: "Toyota Rav4",
        licensePlate: "BJL 123456",
        vehicleOwner: "Nyima Jatta",
        email: "jatta@example.com",
        phone: "5678910",
        location: "Foni",

        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/12/2024",
    },
    {
        id: 4,
        vehicleName: "BMW X5",
        licensePlate: "BJL 456789",
        vehicleOwner: "kawsu Kebbeh",
        email: "kkebbeh@example.com",
        phone: "5678910",
        location: "Old Yundum",

        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/24/2024",
    },
    {
        id: 5,
        vehicleName: "Nissan Pathfinder",
        licensePlate: "BJL 256789",
        vehicleOwner: "Alfo Kebbeh",
        email: "alfo@example.com",
        phone: "5678910",
        location: "Brikama",

        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/11/2024",
    },
];
//user data sample
export const tempUsers = [
    {
        id: 1,
        name: "Mustapha Jaiteh",
        email: "jaitehm20@gmail.com",
        phone: "3609991",
        streetAddress: "Njogu Bah Junction",
        city: "Busumbala",
        region: "WCR",
        vehicleName: "Range Rover",
        vehicleModel: "Evoque",
        vehicleYear: "2022",
        licensePlate: "BJL 123456",
        vehicleType: "Private",
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        phone: "4609991",
        streetAddress: "Njogu Bah Junction",
        city: "Busumbala",
        region: "WCR",
        vehicleName: "Range Rover",
        vehicleModel: "Evoque",
        vehicleYear: "2022",
        licensePlate: "BJL 56789",
        vehicleType: "Private",
    },
    {
        id: 3,
        name: "Kawsu Kebbeh",
        email: "john@example.com",
        phone: "5609991",
        streetAddress: "T-boy Junction",
        city: "Old Yundum",
        region: "WCR",
        vehicleName: "Range Rover",
        vehicleModel: "Evoque",
        vehicleYear: "2022",
        licensePlate: "BJL 456789",
        vehicleType: "Private",
    },
    {
        id: 4,
        name: "Alfo Kebbeh",
        email: "alfo@example.com",
        phone: "5609991",
        streetAddress: "Nema Junction",
        city: "Brikama",
        region: "WCR",
        vehicleName: "Range Rover",
        vehicleModel: "Evoque",
        vehicleYear: "2022",
        licensePlate: "BJL 256789",
        vehicleType: "Private",
    },
    {
        id: 5,
        name: "Binta Badjie",
        email: "bbadjie@example.com",
        phone: "5609991",
        streetAddress: "Nema Junction",
        city: "Sanchaba",
        region: "WCR",
        vehicleName: "Range Rover",
        vehicleModel: "Evoque",
        vehicleYear: "2022",
        licensePlate: "BJL 356789",
        vehicleType: "Private",
    },
];
//Mechanic data sample
export const tempMechanics = [
    {
        id: 1,
        img: mustik,
        name: "Mustapha Jaiteh",
        email: "jaitehm20@gmail.com",
        phone: "+220 3609991",
        streetAddress: "Njogu Bah Junction",
        city: "Busumbala",
        region: "West Coast Region",
        certificationNumber: "3535454",
        yearsOfExperience: "5",
        specialization: " engineer",
        username: "mustaphajaiteh",
        password: "Jaiteh123",
        confirmPassword: "Jaiteh123",
    },
    {
        id: 2,
        img: kawsu,
        name: "Kawsu Kebbeh",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        streetAddress: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certificationNumber: "343546",
        yearsOfExperience: "5",
        specialization: "ttfgfgfg",

        username: "gfgfgf",
        password: "gfg2332",
        confirmPassword: "gfgf1233",
    },
    {
        id: 3,
        img: hawa,
        name: "Hawa Dampha",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        streetAddress: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certificationNumber: "45444",
        yearsOfExperience: "gfgfg",
        specialization: "fgfgfgf",

        username: "gfgfgg",
        password: "fdggf",
        confirmPassword: "fytyty",
    },
    {
        id: 4,
        img: kaddy,
        name: "Kaddy Fadera",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        streetAddress: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certificationNumber: "454trrgfg",
        yearsOfExperience: "ftfgfhgf",
        specialization: "frytyr",

        username: "ytuyjuy",
        password: "tfhghg",
        confirmPassword: "rtrytyt",
    },
    {
        id: 5,
        img: demi,
        name: "Demi Prank",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        streetAddress: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certificationNumber: "kghghgh",
        yearsOfExperience: "ghhghgh",
        specialization: "gfgytty",

        username: "hghgjjj",
        password: "ghyhjgjg",
        confirmPassword: "hgjjjh",
    },
];

//service data sample
export const tempServices = [
    {
        id: 1,
        licensePlate: "BJL 123456",
        vehicleName: "Range Rover",
        vehicleOwner: "Mustapha Jaiteh",
        date: "07/18/2024",
        mechanicName: "Lamin Ceesay",
        mechanicPhone: "5609991",
        mechanicLicense: "3535454",
        location: "Banjul",
        status: "in progress",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        paymentStatus: "completed",
        paidDate: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 2,
        licensePlate: "BJL 56789",
        vehicleName: "Benz",
        vehicleOwner: "John Doe",
        date: "07/18/2024",
        mechanicName: "Binta Badjie",
        mechanicPhone: "5609991",
        mechanicLicense: "343546",
        location: "Sanchaba",
        status: "in progress",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "40000",
        paymentStatus: "pending",
        paidDate: "",
        reciept: "",
    },
    {
        id: 3,
        licensePlate: "BJL 456789",
        vehicleName: "Toyota Rav4",
        vehicleOwner: "Kawsu Kebbeh",
        date: "07/18/2024",
        mechanicName: "Alfo Kebbeh",
        mechanicPhone: "5609991",
        mechanicLicense: "45444",
        location: "Brikama",
        status: "pending",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        paymentStatus: "pending",
        paidDate: "",
        reciept: "",
    },
    {
        id: 4,
        licensePlate: "BJL 256789",
        vehicleName: "BMW X5",
        vehicleOwner: "Binta Badjie",
        date: "07/18/2024",
        mechanicName: "Alfo Kebbeh",
        mechanicPhone: "5609991",
        mechanicLicense: "3535654",
        location: "Sanchaba",
        status: "pending",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "30000",
        paymentStatus: "completed",
        paidDate: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 5,
        licensePlate: "BJL 356789",
        vehicleName: "Nissan Pathfinder",
        vehicleOwner: "Binta Badjie",
        date: "09/18/2024",
        mechanicName: "Lamin Ceesay",
        mechanicPhone: "5609991",
        mechanicLicense: "3535454",
        location: "Brikama",
        status: "in progress",
        issueDescription:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        paymentStatus: "completed",
        paidDate: "09/18/2024",
        reciept: "uploard",
    },
];
//payment data sample
// export const tempPayments = [
//     {
//         id: 5,
//         licensePlate: "123456789",
//         vehicleOwner: "Tom Cook",
//         mechanicName: "Lamin Ceesay",
//         mechanicPhone: "5609991",
//         billDate: "07/18/2024",
//         paidDate: "09/18/2024",
//         charges: "20000",
//         status: "completed",
//         reciept: "uploard",
//     },
// ];

const AdminContext = createContext();
// {
//     admin: {},
//     setAdmin: () => {},
//     adminToken: null,
//     setAdminToken: () => {},
//     users: {},
//     setUsers: () => {},
//     services: {},
//     setServices: () => {},
//     mechanics: {},
//     setMechanics: () => {},
//     bookings: {},
//     setBookings: () => {},
//     payments: {},
//     setPayments: () => {},
// }

// //export mechanic details sample
// export const getMechanicById = (id) =>
//     tempMechanics.find((mechanic) => mechanic.id === id);
// //export user details sample
// export const getUserById = (id) => tempUsers.find((user) => user.id === id);
// //export booking details sample
// export const getBookingById = (id) =>
//     tempBookings.find((booking) => booking.id === id);
// //export service details sample
// export const getServiceById = (id) =>
//     tempServices.find((service) => service.id === id);

// Custom hook to use AdminContext
export const useAdminContext = () => {
    return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState({
        name: "mustik",
        password: "123456",
    });
    const [adminToken, setAdminToken] = useState("");
    const [users, setUsers] = useState(tempUsers);
    const [services, setServices] = useState(tempServices);
    const [mechanics, setMechanics] = useState(tempMechanics);
    const [bookings, setBookings] = useState(tempBookings);
    // const [payments, setPayments] = useState(tempPayments);

    return (
        <AdminContext.Provider
            value={{
                admin,
                setAdmin,
                adminToken,
                setAdminToken,
                users,
                setUsers,
                services,
                setServices,
                mechanics,
                setMechanics,
                bookings,
                setBookings,
                // payments,
                // setPayments,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

// Hook to use context
// export const useAdminContext = () => useContext(AdminContext);
// export default AdminProvider;
