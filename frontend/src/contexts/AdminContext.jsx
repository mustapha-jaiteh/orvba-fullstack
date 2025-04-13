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
        vehicle_name: "Range Rover",
        license_plate: "BJL 123456",
        vehicle_owner: "Tom Cook",
        email: "tom@example.com",
        phone: "5678910",
        location: "Brikama",

        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/18/2024",
    },
    {
        id: 2,
        vehicle_name: "Benz",
        license_plate: "23456789",
        vehicle_owner: "Binta Badjie",
        email: "bbadjie@example.com",
        phone: "5678910",
        location: "Sanchaba",

        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/20/2024",
    },
    {
        id: 3,
        vehicle_name: "Toyota Rav4",
        license_plate: "BJL 123456",
        vehicle_owner: "Nyima Jatta",
        email: "jatta@example.com",
        phone: "5678910",
        location: "Foni",

        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/12/2024",
    },
    {
        id: 4,
        vehicle_name: "BMW X5",
        license_plate: "BJL 456789",
        vehicle_owner: "kawsu Kebbeh",
        email: "kkebbeh@example.com",
        phone: "5678910",
        location: "Old Yundum",

        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        date: "07/24/2024",
    },
    {
        id: 5,
        vehicle_name: "Nissan Pathfinder",
        license_plate: "BJL 256789",
        vehicle_owner: "Alfo Kebbeh",
        email: "alfo@example.com",
        phone: "5678910",
        location: "Brikama",

        issue_description:
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
        street_address: "Njogu Bah Junction",
        city: "Busumbala",
        region: "WCR",
        vehicle_name: "Range Rover",
        vehicle_model: "Evoque",
        vehicle_year: "2022",
        license_plate: "BJL 123456",
        vehicle_type: "Private",
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        phone: "4609991",
        street_address: "Njogu Bah Junction",
        city: "Busumbala",
        region: "WCR",
        vehicle_name: "Range Rover",
        vehicle_model: "Evoque",
        vehicle_year: "2022",
        license_plate: "BJL 56789",
        vehicle_type: "Private",
    },
    {
        id: 3,
        name: "Kawsu Kebbeh",
        email: "john@example.com",
        phone: "5609991",
        street_address: "T-boy Junction",
        city: "Old Yundum",
        region: "WCR",
        vehicle_name: "Range Rover",
        vehicle_model: "Evoque",
        vehicle_year: "2022",
        license_plate: "BJL 456789",
        vehicle_type: "Private",
    },
    {
        id: 4,
        name: "Alfo Kebbeh",
        email: "alfo@example.com",
        phone: "5609991",
        street_address: "Nema Junction",
        city: "Brikama",
        region: "WCR",
        vehicle_name: "Range Rover",
        vehicle_model: "Evoque",
        vehicle_year: "2022",
        license_plate: "BJL 256789",
        vehicle_type: "Private",
    },
    {
        id: 5,
        name: "Binta Badjie",
        email: "bbadjie@example.com",
        phone: "5609991",
        street_address: "Nema Junction",
        city: "Sanchaba",
        region: "WCR",
        vehicle_name: "Range Rover",
        vehicle_model: "Evoque",
        vehicle_year: "2022",
        license_plate: "BJL 356789",
        vehicle_type: "Private",
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
        street_address: "Njogu Bah Junction",
        city: "Busumbala",
        region: "West Coast Region",
        certification_number: "3535454",
        years_of_experience: "5",
        specialization: " engineer",
        username: "mustaphajaiteh",
        password: "Jaiteh123",
        confirm_password: "Jaiteh123",
    },
    {
        id: 2,
        img: kawsu,
        name: "Kawsu Kebbeh",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        street_address: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certification_number: "343546",
        years_of_experience: "5",
        specialization: "ttfgfgfg",

        username: "gfgfgf",
        password: "gfg2332",
        confirm_password: "gfgf1233",
    },
    {
        id: 3,
        img: hawa,
        name: "Hawa Dampha",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        street_address: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certification_number: "45444",
        years_of_experience: "gfgfg",
        specialization: "fgfgfgf",

        username: "gfgfgg",
        password: "fdggf",
        confirm_password: "fytyty",
    },
    {
        id: 4,
        img: kaddy,
        name: "Kaddy Fadera",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        street_address: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certification_number: "454trrgfg",
        years_of_experience: "ftfgfhgf",
        specialization: "frytyr",

        username: "ytuyjuy",
        password: "tfhghg",
        confirm_password: "rtrytyt",
    },
    {
        id: 5,
        img: demi,
        name: "Demi Prank",
        email: "fjdfjfjdkf@hdhdj.com",
        phone: "1234567",
        street_address: "opgfgfgf",
        city: "h;glh;gh",
        region: "dsdsdffd",
        certification_number: "kghghgh",
        years_of_experience: "ghhghgh",
        specialization: "gfgytty",

        username: "hghgjjj",
        password: "ghyhjgjg",
        confirm_password: "hgjjjh",
    },
];

//service data sample
export const tempServices = [
    {
        id: 1,
        license_plate: "BJL 123456",
        vehicle_name: "Range Rover",
        vehicle_owner: "Mustapha Jaiteh",
        date: "07/18/2024",
        mechanic_name: "Lamin Ceesay",
        mechanic_phone: "5609991",
        mechanic_license: "3535454",
        location: "Banjul",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 2,
        license_plate: "BJL 56789",
        vehicle_name: "Benz",
        vehicle_owner: "John Doe",
        date: "07/18/2024",
        mechanic_name: "Binta Badjie",
        mechanic_phone: "5609991",
        mechanic_license: "343546",
        location: "Sanchaba",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "40000",
        payment_status: "pending",
        paid_date: "",
        reciept: "",
    },
    {
        id: 3,
        license_plate: "BJL 456789",
        vehicle_name: "Toyota Rav4",
        vehicle_owner: "Kawsu Kebbeh",
        date: "07/18/2024",
        mechanic_name: "Alfo Kebbeh",
        mechanic_phone: "5609991",
        mechanic_license: "45444",
        location: "Brikama",
        status: "pending",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "pending",
        paid_date: "",
        reciept: "",
    },
    {
        id: 4,
        license_plate: "BJL 256789",
        vehicle_name: "BMW X5",
        vehicle_owner: "Binta Badjie",
        date: "07/18/2024",
        mechanic_name: "Alfo Kebbeh",
        mechanic_phone: "5609991",
        mechanic_license: "3535654",
        location: "Sanchaba",
        status: "pending",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "30000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
    {
        id: 5,
        license_plate: "BJL 356789",
        vehicle_name: "Nissan Pathfinder",
        vehicle_owner: "Binta Badjie",
        date: "09/18/2024",
        mechanic_name: "Lamin Ceesay",
        mechanic_phone: "5609991",
        mechanic_license: "3535454",
        location: "Brikama",
        status: "in progress",
        issue_description:
            "AdminDashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquisquam minus sapiente sunt, earum ut veritatis. Tenetur aspernatur quamducimus laudantium nobis nostrum nam cupiditate repellat odit, sunt eumipsam.",
        charges: "20000",
        payment_status: "completed",
        paid_date: "09/18/2024",
        reciept: "uploard",
    },
];
//payment data sample
// export const tempPayments = [
//     {
//         id: 5,
//         license_plate: "123456789",
//         vehicle_owner: "Tom Cook",
//         mechanic_name: "Lamin Ceesay",
//         mechanic_phone: "5609991",
//         billDate: "07/18/2024",
//         paid_date: "09/18/2024",
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
