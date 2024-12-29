import React from "react";
import { useState } from "react";
// import logo from "/images/car-2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { mechanics } from "../services/data.js";
import logo from "/images/car-2.png";

const MechanicRegister = () => {
    //send the data to the mechanic list table
    const navigate = useNavigate();
    const [newArr, setNewArr] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        img: null,
        fullName: "",
        email: "",
        phone: "",
        streetAddress: "",
        city: "",
        region: "",
        certificationNumber: "",
        yearsOfExperience: "",
        specialization: "",

        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                img: file,
            });
        }
    };

    const [errors, setErrors] = useState({});

    const buttonCancel = () => {
        setFormData({
            id: null,
            img: null,
            fullName: "",
            email: "",
            phone: "",
            streetAddress: "",
            city: "",
            region: "",
            certificationNumber: "",
            yearsOfExperience: "",
            specialization: "",

            username: "",
            password: "",
            confirmPassword: "",
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.img) errors.img = "profile picture is required";
        if (!formData.fullName) errors.fullName = "Full Name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.streetAddress)
            errors.streetAddress = "Street Address is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.region) errors.region = "Region is required";
        if (!formData.certificationNumber)
            errors.certificationNumber = "Certification Number is required";
        if (!formData.yearsOfExperience)
            errors.yearsOfExperience = "Years of Experience is required";
        if (!formData.specialization)
            errors.specialization = "Specialization is required";
        if (!formData.username) errors.username = "Username is required";
        if (!formData.password) errors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            errors.confirmPassword = "Passwords do not match";
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted", formData);
            // Handle form submission, e.g., send data to a server
            //test the sending to the mechanic list table
        } else {
            setErrors(validationErrors);
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            const newEntry = {
                id: formData.id,
                img: reader.result,
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                streetAddress: formData.streetAddress,
                city: formData.city,
                state: formData.state,
                certificationNumber: formData.certificationNumber,
                yearsOfExperience: formData.yearsOfExperience,
                specialization: formData.specialization,

                username: formData.username,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            };
            setNewArr([...newArr, newEntry]);
            mechanics.push({ ...newEntry, id: crypto.randomUUID() });
            // reroute to the mechanics page.
            navigate("/mechanics");
        };
        if (formData.img) {
            reader.readAsDataURL(formData.img);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="UserRegistration-form text-gray-950 bg-blue-200 border-4 border-slate-950 mx-4 lg:mx-12 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center z-50 "
            >
                <header className="form-header bg-slate-950 p-4 lg:p-10 text-gray-100 justify-center items-center text-center w-full">
                    <div>
                        <h1 className="text-4xl font-bold py-2 lg:py-4">
                            MECHANIC REGISTRATION FORM
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
                            placeholder="full name"
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
                            placeholder="email"
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
                            placeholder="phone number"
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
                            placeholder="Street address"
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
                    <div className="profilePicture flex flex-col gap-2 text-start">
                        <label>Profile Picture:</label>
                        <input
                            type="file"
                            name="profilePicture"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="certificationNumber flex flex-col gap-2 text-start">
                        <label>Certification/License Number:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="certificationNumber"
                            placeholder="License number"
                            value={formData.certificationNumber}
                            onChange={handleChange}
                        />
                        {errors.certificationNumber && (
                            <span>{errors.certificationNumber}</span>
                        )}
                    </div>
                    <div className="yearsOfExperience flex flex-col gap-2 text-start">
                        <label>Years of Experience:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="number"
                            name="yearsOfExperience"
                            placeholder="Years of experience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                        />
                        {errors.yearsOfExperience && (
                            <span>{errors.yearsOfExperience}</span>
                        )}
                    </div>
                    <div className="specialization flex flex-col gap-2 text-start">
                        <label>Specialization:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="specialization"
                            placeholder="Specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                        />
                        {errors.specialization && (
                            <span>{errors.specialization}</span>
                        )}
                    </div>

                    <div className="serviceArea flex flex-col gap-2 text-start">
                        <label>Service Area:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2"
                            type="text"
                            name="serviceArea"
                            placeholder="Service area"
                            value={formData.serviceArea}
                            onChange={handleChange}
                        />
                        {errors.serviceArea && (
                            <span>{errors.serviceArea}</span>
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
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <span>{errors.confirmPassword}</span>
                        )}
                    </div>
                    {/* <Link to=""> */}
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
                    >
                        Submit
                    </button>
                    {/* </Link> */}
                    <button
                        className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-lg w-40 place-self-center"
                        onClick={buttonCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default MechanicRegister;
