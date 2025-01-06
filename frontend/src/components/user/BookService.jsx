import React from "react";
import { useState } from "react";

const BookService = () => {
    const [formData, setFormData] = useState({
        vehicleName: "",
        licensePlate: "",
        vehicleOwner: "",
        email: "",
        phone: "",
        location: "",
        issueDescription: "",
        date: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to the server or handle it as needed
        console.log("Booking Details:", formData);
        alert("Service booked successfully!");
    };

    return (
        <div className=" text-black ml-14 lg:ml-[220px] p-8">
            <h2>Book a Service</h2>
            <form
                onSubmit={handleSubmit}
                className="UserRegistration-form bg-blue-100 text-gray-950 border-2 border-slate-950 mx-6 lg:mx-16 my-4  lg:my-10 rounded-lg shadow-md flex flex-col justify-center items-center ml-32"
            >
                <header className="form-header bg-slate-950 p-4 text-gray-100 justify-center items-center text-center w-full">
                    <p className="text-lg font-bold ">Book a service</p>
                </header>
                <div className="form-body grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full px-4 lg:px-8 py-4 lg:py-10">
                    <div className="vehicle-name flex flex-col gap-2">
                        <label>Vehicle Name: </label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.vehicleName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="license-plate flex flex-col gap-2">
                        <label>License Plate: </label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.licensePlate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="full-name flex flex-col gap-2">
                        <label>Vehicle Owner: </label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.vehicleOwner}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="email flex flex-col gap-2">
                        <label>Email:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact flex flex-col gap-2">
                        <label>Phone:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="location flex flex-col gap-2">
                        <label>Location:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="description flex flex-col gap-2">
                        <label>Issue Description:</label>
                        <textarea
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            name="issueDescription"
                            placeholder="Describe the problem"
                            value={formData.issueDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="date flex flex-col gap-2">
                        <label>Date:</label>
                        <input
                            className="border border-slate-500 rounded-lg p-2 text-black"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 right-0 place-self-center"
                    >
                        Book Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookService;
