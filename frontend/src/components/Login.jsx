import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = ({ handleLoginClose }) => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.value;
        setLogin({
            ...Login,
            [name]: value,
        });
    };
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 mx-4 lg:mx-0">
            <div className="bg-white p-8 rounded-lg  w-96">
                <h2 className="text-3xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-900 rounded"
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-900 rounded"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 font-semibold"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleLoginClose}
                    className="mt-4 text-red-500 hover:underline font-semibold"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Login;
