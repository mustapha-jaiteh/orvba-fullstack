import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Home from "./src/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import UserRegister from "./src/components/user/UserRegister";
import MechanicRegister from "./src/components/mechanic/MechanicRegister";
// import Admin from "./src/pages/mechanic/Admin";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import AdminLayout from "./src/components/admin/AdminLayout";
import { useAdminContext } from "./src/contexts/AdminContext.jsx";
import { useContext } from "react";
import Users from "./src/pages/user/Users.jsx";
import Services from "./src/pages/admin/Services.jsx";
import Mechanics from "./src/pages/mechanic/Mechanics.jsx";
import Bookings from "./src/pages/admin/Bookings.jsx";
import Payments from "./src/pages/admin/Payments.jsx";
//details pages
import MechanicDetails from "./src/pages/mechanic/MechanicDetails.jsx";
import UserDetails from "./src/pages/user/UserDetails.jsx";
import BookingDetails from "./src/pages/admin/BookingDetails.jsx";
import ServiceDetails from "./src/pages/admin/ServiceDetails.jsx";

const Router = () => {
    const { mechanics, users, bookings, services } = useAdminContext();

    // Define the routes
    const router = createBrowserRouter([
        // {
        //     path: "",
        //     element: <Home />,
        // },
        {
            path: "login",
            element: <Login />,
        },
        { path: "register", element: <Register /> },
        {
            path: "user_register",
            element: <UserRegister />,
        },
        {
            path: "mechanic_register",
            element: <MechanicRegister />,
        },

        {
            path: "/",
            element: <AdminLayout />,
            children: [
                { path: "/admin_dashboard", element: <Navigate to="/" /> },
                { path: "/", element: <AdminDashboard /> },

                {
                    path: "/mechanics",
                    element: <Mechanics mechanics={mechanics} />,
                },
                {
                    path: "/mechanics/:id",
                    element: <MechanicDetails />,
                },
                { path: "/users", element: <Users users={users} /> },
                {
                    path: "users/:id",
                    element: <UserDetails />,
                },
                {
                    path: "/bookings",
                    element: <Bookings bookings={bookings} />,
                },
                {
                    path: "bookings/:id",
                    element: <BookingDetails />,
                },
                {
                    path: "/services",
                    element: <Services services={services} />,
                },
                {
                    path: "services/:id",
                    element: <ServiceDetails />,
                },
                {
                    path: "/payments",
                    element: <Payments />,
                },
                { path: "/settings", element: <h2>Admin Settings</h2> },
            ],
            // loader: async () => {
            //   return getMechanics();
            // },
        },
    ]);
    return <RouterProvider router={router} />;
};

// Export the router instance
export default Router;
