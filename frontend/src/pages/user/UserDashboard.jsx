import React from "react";
import UserPages from "../../components/user/UserPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const UserDashboard = () => {
    //fetch the user data
    const { users, mechanics, services, bookings } = useAdminContext();
    //fetch the user data
    // const { id } = useParams();
    const user = users.find((item) => item.id === 1);

    //user services data
    const userServices = services.filter(
        (service) => service.licensePlate === user.licensePlate && user.id === 1
    );
    //fetch the latest service for the user
    const currentService = userServices.find(
        (service) => service.status === "in progress" && user.id === 1
    );

    //the number of bookings made by the user
    const userBookings = bookings.filter(
        (booking) => booking.licensePlate === user.licensePlate && user.id === 1
    ).length;
    // Determine button class based on service status
    const getServiceStatus = () => {
        switch (currentService.status) {
            case "completed":
                return "bg-green-500 hover:bg-green-600 text-white";
            case "in progress":
                return "bg-blue-500 hover:bg-blue-600 text-white";
            case "pending":
                return "bg-yellow-500 hover:bg-yellow-600 text-white";
            default:
                return "bg-gray-500 hover:bg-gray-600 text-white";
        }
    };

    // payment status
    const getPaymentStatus = () => {
        switch (currentService.paymentStatus) {
            case "completed":
                return "text-green-500 hover:text-green-600 ";
            case "in progress":
                return "text-blue-500 hover:text-blue-600 ";
            case "pending":
                return "text-yellow-500 hover:text-yellow-600 ";
            default:
                return "text-gray-500 hover:text-gray-600 ";
        }
    };
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("name");
    const [filteredMechanics, setFilteredMechanics] = useState(mechanics);

    const handleSearch = () => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = mechanics.filter((mechanic) =>
            mechanic[filterBy].toLowerCase().includes(lowercasedTerm)
        );
        setFilteredMechanics(results);
    };

    // return the user data
    return (
        <UserPages title="Dashboard">
            <div>
                <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                    Welcome to your user dashboard
                </h2>
                <h3 className="text-center text-md font-bold m-2">
                    You can manage your account here, book a service, check your
                    revious request status, search for a nearby mechanic for an
                    emergency service, etc.
                </h3>
            </div>
            <div className="p-4">
                <h1 className="text-xl font-bold">
                    Search for a nearby Mechanic
                </h1>
                <div className="flex flex-col lg:flex-row gap-4 items-center space-x-4 mt-4">
                    {/* Dropdown to select search criteria */}
                    <select
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="p-2 border border-gray-500 rounded"
                    >
                        <option value="name">Name</option>
                        <option value="location">Location</option>
                        <option value="profession">Profession</option>
                    </select>

                    {/* Search Input */}
                    <div className="flex items-center border rounded-lg p-2 relative">
                        <CiSearch className="absolute right-4  top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={`Search by ${filterBy}`}
                            className="p-2 border border-gray-500 w-80 rounded flex-grow"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="p-2 bg-blue-500 w-32 text-white rounded"
                    >
                        Search
                    </button>
                </div>

                {/* Display Results
                    <div className="mt-6">
                        {filteredMechanics.length > 0 ? (
                            filteredMechanics.map((mechanic) => (
                                <div key={mechanic.id} className="p-2 border-b">
                                    <p>
                                        <strong>Name:</strong> {mechanic.name}
                                    </p>
                                    <p>
                                        <strong>Location:</strong>{" "}
                                        {mechanic.location}
                                    </p>
                                    <p>
                                        <strong>Profession:</strong>{" "}
                                        {mechanic.profession}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No mechanics found.</p>
                        )}
                    </div> */}
            </div>

            <div className="Phone grid grid-cols-1 lg:grid-cols-3 py-8 bg-blue-100">
                {/* <div className="profile-details"> */}
                <div className="image">
                    <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                        {user.name}
                    </h2>

                    <div className="card bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2 relative px-8">
                        <div>
                            <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                <span className="text-black">Name:</span>{" "}
                                {user.name}
                            </h2>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Email:</span>{" "}
                                {user.email}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Vehicle name:</span>{" "}
                                {user.vehicleName}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    License plate:
                                </span>{" "}
                                {user.licensePlate}
                            </p>
                        </div>
                    </div>
                    <div className="card2 bg-gray-50 flex flex-row m-4  gap-2 shadow-2xl bg-transparent items-center justify-center rounded-2xl shadow-slate-950 p-2 relative px-8">
                        <Link to={"/book_service"}>
                            <button className=" bg-blue-600 hover:bg-blue-400 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 place-self-center ">
                                Book a regular service
                            </button>
                        </Link>
                    </div>
                </div>
                {/* current service status details */}
                <div className="details  bg-gradient-to-r from-slate-950 to-slate-700 text-gray-100 p-8  rounded-md space-y-2">
                    {currentService ? (
                        <div>
                            <h1 className="text-2xl font-bold text-center justify-center w-full">
                                current service details:
                            </h1>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    License plate:{" "}
                                </span>{" "}
                                {currentService.licensePlate}
                            </p>
                            <p className="text-start my-2 mx-1">
                                {" "}
                                <span className="font-bold">
                                    Request date:
                                </span>{" "}
                                {currentService.date}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Mechanic name:
                                </span>{" "}
                                {currentService.mechanicName}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Mechanic location:
                                </span>{" "}
                                {currentService.location}
                            </p>
                            <p>
                                <span className="font-bold">
                                    Mechanic contact:
                                </span>{" "}
                                {currentService.mechanicPhone}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Charges:</span>{" "}
                                {currentService.charges}
                            </p>
                            <p
                                className={`text-start my-2 mx-1 font-bold ${getPaymentStatus(
                                    currentService.paymentStatus
                                )}`}
                            >
                                <span className="font-bold text-white">
                                    Payment status:
                                </span>{" "}
                                {currentService.paymentStatus}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Paid date:</span>{" "}
                                {currentService.paidDate}
                            </p>
                            <div className=" text-center justify-center  my-8">
                                <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                                    Service status:{" "}
                                </h2>
                                <button
                                    className={` justify-center items-center rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ${getServiceStatus(
                                        currentService.status
                                    )}`}
                                >
                                    {currentService.status}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-4xl font-bold text-center justify-center w-full items-center my-32">
                            There is no ongoing service for you at the moment.
                        </h1>
                    )}
                </div>
                {/* services stats */}
                <div className="buttons text-center items-center my-4 lg:my-2 ">
                    <h4 className="text-4xl font-bold  ">Bookings:</h4>
                    <h3 className="text-center text-md font-bold m-2">
                        The number of bookings you made since your account
                        registration
                    </h3>
                    <div className="performance-stats flex flex-col justify-between items-center">
                        <div className="job-order h-40 lg:h-48 bg-gradient-to-r from-slate-950 to-slate-700 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
                            <h3 className="font-bold text-sm text-center">
                                Number of bookings
                            </h3>
                            <div>
                                <h3 className="font-bold text-white text-4xl">
                                    {userBookings}
                                </h3>{" "}
                                <p className="text-gray-400">
                                    service requests
                                </p>
                            </div>
                            <p className="text-gray-400">
                                made by this user so far
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UserPages>
    );
};

export default UserDashboard;
