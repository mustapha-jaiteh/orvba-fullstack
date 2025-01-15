import React from "react";
import { useState } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MechanicPages from "../../components/mechanic/MechanicPages";
import { useLocation } from "react-router-dom";

const UpdateServices = ({}) => {
    // const [status, setStatus] = useState("");
    // const [charges, setCharges] = useState("");
    // const [paidDate, setPaidDate] = useState("");
    // const [receipt, setReceipt] = useState(null);
    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");
    const location = useLocation();
    const { licensePlate } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        const updatedData = {
            licensePlate,
            status: e.target.status.value,
            charges: e.target.charges.value,
            paymentStatus: e.target.paymentStatus.value,
            paidDate: e.target.paidDate.value,
            receipt: e.target.receipt.files[0],
        };
        console.log("Updated Data:", updatedData);

        // Send updatedData to the backend via an API call
    };

    return (
        <>
            <MechanicPages title="Update services">
                <div className="new-requests w-full  h-full bg-blue-100 pb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                        <h1 className="text-center text-4xl my-2 py-4 font-bold">
                            Update service status
                        </h1>
                    </div>
                    <div className="p-4 max-w-lg mx-auto bg-white border rounded-2xl shadow-2xl shadow-slate-950">
                        <h2 className="text-xl font-bold mb-4">
                            Update Service
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    License Number
                                </label>
                                <input
                                    type="text"
                                    value={licensePlate || ""}
                                    readOnly
                                    className="w-full border border-gray-300 p-2 rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    Service Status
                                </label>
                                <select
                                    name="serviceStatus"
                                    className="w-full border border-gray-300 p-2 rounded"
                                >
                                    <option value="pending">pending</option>
                                    <option value="in progress">
                                        in progress
                                    </option>
                                    <option value="completed">completed</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    Charges
                                </label>
                                <input
                                    type="number"
                                    name="charges"
                                    placeholder="Enter charges"
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    Payment Status
                                </label>
                                <select
                                    name="serviceStatus"
                                    className="w-full border border-gray-300 p-2 rounded"
                                >
                                    <option value="pending">pending</option>
                                    <option value="in progress">
                                        in progress
                                    </option>
                                    <option value="completed">completed</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    Paid Date
                                </label>
                                <input
                                    type="date"
                                    name="paymentDate"
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold">
                                    Payment Receipt
                                </label>
                                <input
                                    type="file"
                                    name="receipt"
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                            <div className="items-center justify-center place-self-center">
                                <button
                                    type="submit"
                                    className="w-40 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 font-bold"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* testing table */}
            </MechanicPages>
        </>
    );
};

export default UpdateServices;
