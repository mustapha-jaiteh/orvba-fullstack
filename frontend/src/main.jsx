import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { AdminProvider } from "./contexts/AdminContext";
import Router from "../router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AdminProvider>
            <Router />
        </AdminProvider>
    </React.StrictMode>
);
