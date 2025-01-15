import React from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MechanicPages from "../../components/mechanic/MechanicPages";

const NewRequests = () => {
    const { mechanics, bookings, services } = useAdminContext();

    // const { id } = useParams();
    const mechanic = mechanics.find((item) => item.id === 1);

    const booking = bookings.filter(
        (book) => book.licensePlate === "BJL 123456"
    );
    //  const getBookingById = (id) => {
    //     return bookings.find((book) => book.id === booking.id);
    // };
    return (
        <MechanicPages title="New Requests">
            <div className="new-requests w-full  h-full bg-green-100 pb-8 ">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        New Requests
                    </h1>
                    {/* <Link to="/mechanic_register">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-40">
                            Add mechanic
                        </button>{" "}
                    </Link> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-yellow-500 text-gray-950">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    License Plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle name
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Owner
                                </th>
                                <th className="p-2 border-x border-white">
                                    Location
                                </th>
                                <th className="p-2 border-x border-white">
                                    Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    More Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((book) => (
                                <tr
                                    key={book.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-2  items-center text-center"
                                >
                                    <td className="p-2 border-x border-gray-300">
                                        {book.licensePlate}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.vehicleName}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.vehicleOwner}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.location}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {book.date}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        <Link
                                            to={`/mechanic_dashboard/new_requests/${book.id}`}
                                        >
                                            <button className="bg-red-500 p-2 rounded-sm w-20">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MechanicPages>
    );
};

export default NewRequests;
