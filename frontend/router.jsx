import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import UserRegister from "./src/components/user/UserRegister";
import MechanicRegister from "./src/components/mechanic/MechanicRegister";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
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
]);

export default router;
