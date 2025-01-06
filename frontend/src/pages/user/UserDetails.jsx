import React from "react";
import { useParams } from "react-router-dom";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";

const UserDetails = () => {
    //fetch the user data
    const { users, services, bookings } = useAdminContext();

    //fetch the user data
    const { id } = useParams();
    const user = users.find((item) => item.id === parseInt(id));

    //user services data
    const userServices = services.filter(
        (service) => service.licensePlate === user.licensePlate
    );
    //fetch the latest service for the user
    const currentService = userServices.find(
        (service) => service.status === "in progress"
    );

    //the number of bookings made by the user
    const userBookings = bookings.filter(
        (booking) => booking.licensePlate === user.licensePlate
    ).length;

    return (
        <AdminPages title="User Details">
            <div className="Phone grid grid-cols-1 lg:grid-cols-3 py-8 bg-blue-100">
                {/* <div className="profile-details"> */}
                <div className="image">
                    <h2 className=" text-4xl font-bold text-center justify-center w-full ">
                        {user.name}
                    </h2>
                    <h3 className="text-center text-md font-bold m-2">
                        The details on the card below will be shown to user's
                        profile too
                    </h3>
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
                                <span className="font-bold">Phone:</span>{" "}
                                {user.phone}
                            </p>
                            <p className="text-start my-2 mx-1">
                                {" "}
                                <span className="font-bold">
                                    Street address:
                                </span>{" "}
                                {user.streetAddress}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">City:</span>{" "}
                                {user.city}
                            </p>

                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Region:</span>{" "}
                                {user.region}
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
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">
                                    Vehicle model:
                                </span>{" "}
                                {user.vehicleModel}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Vehicle year:</span>{" "}
                                {user.vehicleYear}
                            </p>
                        </div>
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
                                <span className="font-bold">
                                    Issue description:
                                </span>{" "}
                                {currentService.issueDescription}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Charges:</span>{" "}
                                {currentService.charges}
                            </p>

                            <p className="text-start my-2 mx-1 font-bold">
                                <span className="font-bold">
                                    Payment status:
                                </span>{" "}
                                {currentService.paymentStatus}
                            </p>
                            <p className="text-start my-2 mx-1">
                                <span className="font-bold">Paid date:</span>{" "}
                                {currentService.paidDate}
                            </p>
                        </div>
                    ) : (
                        <h1 className="text-4xl font-bold text-center justify-center w-full items-center my-32">
                            There is no ongoing service for this user.
                        </h1>
                    )}
                </div>
                {/* services stats */}
                <div className="buttons text-center items-center ">
                    <h4 className="text-4xl font-bold  ">Bookings:</h4>
                    <h3 className="text-center text-md font-bold m-2">
                        The number of bookings made by the user since
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
                                from the user's reqistration date
                            </p>
                        </div>
                    </div>
                    <button className=" bg-red-600 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ">
                        Delete user
                    </button>
                </div>
            </div>
        </AdminPages>
    );
};

export default UserDetails;
