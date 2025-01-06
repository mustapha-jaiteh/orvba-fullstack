import React from "react";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
    const { bookings } = useAdminContext();

    const { id } = useParams();
    const booking = bookings.find((book) => book.id === parseInt(id));

    return (
        <AdminPages title="Booking Details">
            <div className="Phone  py-8 bg-blue-100">
                <h1 className="text-center text-4xl my-2 py-4 font-bold">
                    Booking details of a
                </h1>
                <div className="profile-details items-center justify-center text-center">
                    <div className="image">
                        <h2 className=" text-4xl font-bold text-center justify-center w-full text-blue-800">
                            {booking.vehicleName}
                        </h2>
                        <h3 className="text-center text-md font-bold m-2">
                            The details on the card below will be sent to the
                            assigned mechanic.
                        </h3>
                        <div className="card bg-white m-4 lg:mx-32  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-4 relative">
                            <div>
                                <h2 className=" font-bold text-start my-2 mx-1 text-blue-800">
                                    <span className="text-black">
                                        License plate:
                                    </span>{" "}
                                    {booking.licensePlate}
                                </h2>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle name:
                                    </span>{" "}
                                    {booking.vehicleName}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Vehicle owner:
                                    </span>{" "}
                                    {booking.vehicleOwner}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Email:</span>{" "}
                                    {booking.email}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Phone:</span>{" "}
                                    {booking.phone}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Location:</span>{" "}
                                    {booking.location}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">Date:</span>{" "}
                                    {booking.date}
                                </p>
                                <p className="text-start my-2 mx-1">
                                    <span className="font-bold">
                                        Issue description:
                                    </span>{" "}
                                    {booking.issueDescription}
                                </p>
                            </div>
                        </div>
                        <div className=" items-center justify-center">
                            <button className=" bg-blue-600 hover:bg-blue-400 rounded-3xl border-gray-300 shadow-md  w-40 font-bold lg:w-60 h-12 lg:h-16 text-gray-100  mt-8 ">
                                Assign a booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPages>
    );
};

export default BookingDetails;
