import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "/images/car-2.png";
// import { users } from "../services/data";
import logo from "/images/car-2.png";

const UserRegister = () => {
    const [newArr, setNewArr] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        fullName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        region: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        licensePlate: "",
        vehicleType: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full Name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.streetAddress)
            errors.streetAddress = "Street Address is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.region) errors.region = "Region is required";
        if (!formData.vehicleMake)
            errors.vehicleMake = "Vehicle Make is required";
        if (!formData.vehicleModel)
            errors.vehicleModel = "Vehicle Model is required";
        if (!formData.vehicleYear)
            errors.vehicleYear = "Vehicle Year is required";
        if (!formData.licensePlate)
            errors.licensePlate = "License Plate is required";
        if (!formData.vehicleType)
            errors.vehicleType = "Vehicle Type is required";
        if (!formData.username) errors.username = "Username is required";
        if (!formData.password) errors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            errors.confirmPassword = "Passwords do not match";
        return errors;
    };

    const buttonCancel = () => {
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            streetAddress: "",
            city: "",
            region: "",
            vehicleMake: "",
            vehicleModel: "",
            vehicleYear: "",
            licensePlate: "",
            vehicleType: "",
            username: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted", formData);
            // Handle form submission, e.g., send data to a server
        } else {
            setErrors(validationErrors);
        }
        const newEntry = {
            id: formData.id,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            streetAddress: formData.streetAddress,
            city: formData.city,
            region: formData.region,
            vehicleMake: formData.vehicleMake,
            vehicleModel: formData.vehicleModel,
            vehicleYear: formData.vehicleYear,
            licensePlate: formData.licensePlate,
            vehicleType: formData.vehicleType,
            username: formData.username,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        };
        setNewArr([...newArr, newEntry]);
        users.push({ ...newEntry, id: crypto.randomUUID() });
        // reroute to the users page.
        navigate("/users");
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="UserRegistration-form bg-blue-200 text-gray-950 border-4 border-slate-950 mx-4 lg:mx-12 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center "
            >
                <header className="form-header bg-slate-950 p-4 lg:p-10 text-gray-100 justify-center items-center text-center w-full">
                    <div>
                        <h1 className="text-4xl font-bold py-2 lg:py-4">
                            USER REGISTRATION FORM
                        </h1>
                        <p className="text-lg font-bold ">
                            Please fill out the form below to register.
                        </p>
                    </div>
                </header>
                <div className="form-body grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8 py-4 lg:py-10">
                    <div className="full-name flex flex-col gap-2 text-start">
                        <label className="label">Full Name:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <span>{errors.fullName}</span>}
                    </div>
                    <div className="email flex flex-col gap-2 text-start">
                        <label>Email:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="phone flex flex-col gap-2 text-start">
                        <label>Phone:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span>{errors.phone}</span>}
                    </div>
                    <div className="streetAddress flex flex-col gap-2 text-start">
                        <label>Street Address:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            value={formData.streetAddress}
                            onChange={handleChange}
                        />
                        {errors.streetAddress && (
                            <span>{errors.streetAddress}</span>
                        )}
                    </div>
                    <div className="city flex flex-col gap-2 text-start">
                        <label>City:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <span>{errors.city}</span>}
                    </div>
                    <div className="region flex flex-col gap-2 text-start">
                        <label>Region:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="region"
                            placeholder="Region"
                            value={formData.region}
                            onChange={handleChange}
                        />
                        {errors.region && <span>{errors.region}</span>}
                    </div>
                    <div className="vehicleMake flex flex-col gap-2 text-start">
                        <label>Vehicle Make:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="vehicleMake"
                            placeholder="Vehicle Make"
                            value={formData.vehicleMake}
                            onChange={handleChange}
                        />
                        {errors.vehicleMake && (
                            <span>{errors.vehicleMake}</span>
                        )}
                    </div>
                    <div className="vehicleModel flex flex-col gap-2 text-start">
                        <label>Vehicle Model:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="vehicleModel"
                            placeholder="Vehicle Model"
                            value={formData.vehicleModel}
                            onChange={handleChange}
                        />
                        {errors.vehicleModel && (
                            <span>{errors.vehicleModel}</span>
                        )}
                    </div>
                    <div className="vehicleYear flex flex-col gap-2 text-start">
                        <label>Vehicle Year:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="number"
                            name="vehicleYear"
                            placeholder="Vehicle Year"
                            value={formData.vehicleYear}
                            onChange={handleChange}
                        />
                        {errors.vehicleYear && (
                            <span>{errors.vehicleYear}</span>
                        )}
                    </div>
                    <div className="licensePlate flex flex-col gap-2 text-start">
                        <label>License Plate:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="licensePlate"
                            placeholder="License Plate"
                            value={formData.licensePlate}
                            onChange={handleChange}
                        />
                        {errors.licensePlate && (
                            <span>{errors.licensePlate}</span>
                        )}
                    </div>
                    <div className="vehicleType flex flex-col gap-2 text-start">
                        <label>Vehicle Type:</label>
                        <select
                            className="border border-slate-500 p-2 text-black"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="sedan">Private</option>
                            <option value="suv">Comercial</option>
                            <option value="truck">Truck</option>
                            <option value="motorcycle">Motorcycle</option>
                        </select>
                        {errors.vehicleType && (
                            <span>{errors.vehicleType}</span>
                        )}
                    </div>
                    <div className="username flex flex-col gap-2 text-start">
                        <label>Username:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <span>{errors.username}</span>}
                    </div>
                    <div className="password flex flex-col gap-2 text-start">
                        <label>Password:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div className="confirmPassword flex flex-col gap-2 text-start">
                        <label>Confirm Password:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <span>{errors.confirmPassword}</span>
                        )}
                    </div>
                    {/* <div className="button-container flex justify-center items-center w-full gap-32"> */}
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
                    >
                        Register
                    </button>
                    <button
                        className="bg-gray-400 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-lg w-40 place-self-center"
                        onClick={buttonCancel}
                    >
                        Cancel
                    </button>

                    {/* </div> */}
                </div>
            </form>
        </>
    );
};

export default UserRegister;
